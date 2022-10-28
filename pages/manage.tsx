import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import type { NextPage } from "next";
import toast from "react-hot-toast";

import { db } from "@/config/firebase";

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

  const handleAdd: React.FormEventHandler = async (e) => {
    e.preventDefault();

    try {
      const payload: Omit<Member, "id"> = {
        firstName,
        lastName,
        position: "Member",
      };

      await setDoc(doc(db, "members", studentId), payload);
      toast.success("Member Added!");

      setStudentId("");
      setFirstName("");
      setLastName("");
    } catch (err: any) {
      toast.error(err.message);
    }
  };

  const handlePreview = () => {
    const _parsedMembers = JSON.parse(members);
    setParsedMembers(_parsedMembers.members);
  };

  const handleImport = () => {
    try {
      parsedMembers.forEach(async (member) => {
        const studentId = member.email.split("@")[0].substring(1);
        const fullName = member.name.split(", ");
        const firstName = fullName[1];
        const lastName = fullName[0];

        try {
          await setDoc(doc(db, `members/${studentId}`), {
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

  return (
    <form
      onSubmit={handleAdd}
      className="max-w-screen-sm mx-auto flex flex-col"
    >
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

      {parsedMembers.length > 0 && (
        <>
          <div>
            {parsedMembers.map((m) => {
              return (
                <div key={m.email} className="mb-6">
                  <p>{m.name}</p>
                  <p>{m.email}</p>
                  <p>{m.position}</p>
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={handleImport}
            className="primary-btn self-end mt-4"
          >
            Import Data
          </button>
        </>
      )}
    </form>
  );
};

export default Manage;
