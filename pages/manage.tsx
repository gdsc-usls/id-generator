import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import type { NextPage } from "next";
import toast from "react-hot-toast";
import { z } from "zod";

import { db } from "@/config/firebase";
import { fromFullName, studentIdFromEmail } from "@/utils/helpers";
import { ConfirmDialog } from "@/components/Dialog";

interface RawMember {
  name: string;
  email: string;
  position: string;
}

const Manage: NextPage = () => {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [members, setMembers] = useState("");
  const [parsedMembers, setParsedMembers] = useState<RawMember[]>([]);

  const [addDialog, setAddDialiog] = useState(false);
  const [importDialog, setImportDialog] = useState(false);

  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState("");

  const handleAdd = async () => {
    try {
      const payload: Omit<Member, "id"> = {
        firstName,
        lastName,
        position,
      };

      await setDoc(doc(db, "members", studentId), payload);
      toast.success("Member added");

      setAddDialiog(false);

      setTimeout(() => {
        setStudentId("");
        setFirstName("");
        setLastName("");
        setPosition("");
      }, 500);
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handlePreview = () => {
    const schema = z.object({
      name: z.string(),
      email: z.string(),
      position: z.string(),
    });

    try {
      let invalid = false;
      const _parsedMembers: RawMember[] = JSON.parse(members).members;
      _parsedMembers.forEach((m) => {
        const data = schema.safeParse(m);
        if (!data.success) {
          toast.error("Contains invalid data");
          invalid = true;
          return;
        }
      });

      setParsedMembers(invalid ? [] : _parsedMembers);

      if (!invalid) {
        setImportDialog(true);
      }
    } catch {
      toast.error("Invalid JSON format");
    }
  };

  const handleImport = () => {
    try {
      parsedMembers.forEach(async (member) => {
        const { firstName, lastName } = fromFullName(member.name);

        try {
          await setDoc(doc(db, `members/${studentIdFromEmail(member.email)}`), {
            firstName,
            lastName,
            position: member.position,
          });
        } catch (err: any) {
          toast.error(err.message);
        }
      });

      setParsedMembers([]);
      setMembers("");
      toast.success("Members added");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handleLogin: React.FormEventHandler = (e) => {
    e.preventDefault();

    if (password === process.env.NEXT_PUBLIC_PASSWORD) {
      setAuthorized(true);
      toast.success("Login successful");
    } else {
      toast.error("Incorrect password");
    }
  };

  if (!authorized) {
    return (
      <form onSubmit={handleLogin} className="flex space-x-3">
        <input
          required
          type="password"
          className="input"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" className="primary-btn">
          Login
        </button>
      </form>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setAddDialiog(true);
      }}
      className="max-w-screen-sm mx-auto flex flex-col"
    >
      <ConfirmDialog
        isOpen={addDialog}
        setIsOpen={setAddDialiog}
        handleConfirm={handleAdd}
        content={
          <div>
            <p className="border-b pb-2 border-secondary-100">
              Are you sure you want to add this member?
            </p>
            <div className="mt-6">
              <p>Student ID - {studentId}</p>
              <p>
                Full Name - {firstName} {lastName}
              </p>
              <p>Position - {position}</p>
            </div>
          </div>
        }
      />

      <ConfirmDialog
        isOpen={importDialog}
        setIsOpen={setImportDialog}
        handleConfirm={handleImport}
        content={
          <div>
            <p className="border-b pb-2 border-secondary-100">
              Total members to be added: {parsedMembers.length}
            </p>
            <div className="mt-6 bg-[#2a2a2a] p-4 rounded max-h-[300px] overflow-y-scroll">
              <div>
                {parsedMembers.map((m) => {
                  const { firstName, lastName } = fromFullName(m.name);

                  return (
                    <div key={m.email} className="mb-6">
                      <p>{studentIdFromEmail(m.email)}</p>
                      <p>
                        {firstName} {lastName}
                      </p>
                      <p>{m.position}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        }
      />

      <h1 className="mb-6 text-5xl font-bold">Add Member</h1>
      <div className="grid grid-cols-2 gap-4">
        <input
          type="text"
          required
          minLength={7}
          maxLength={7}
          className="input"
          placeholder="Student ID"
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
        />

        <input
          type="text"
          required
          minLength={2}
          maxLength={100}
          className="input"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />

        <input
          type="text"
          required
          minLength={2}
          maxLength={100}
          className="input"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

        <input
          type="text"
          required
          minLength={6}
          maxLength={100}
          className="input"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
      </div>

      <button type="submit" className="primary-btn self-end mt-4">
        Add Member
      </button>

      <div>
        <h1 className="mb-6 text-5xl font-bold mt-24">Import Members</h1>
        <textarea
          className="input min-h-[200px] max-h-[500px]"
          placeholder="Paste JSON"
          value={members}
          onChange={(e) => setMembers(e.target.value)}
        />
      </div>

      <button
        type="button"
        onClick={handlePreview}
        className="primary-btn self-end mt-4"
      >
        Preview Data
      </button>
    </form>
  );
};

export default Manage;
