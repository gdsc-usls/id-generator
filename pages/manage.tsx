import React, { useState } from "react";
import { doc, setDoc } from "firebase/firestore";
import type { NextPage } from "next";
import toast from "react-hot-toast";

import { db } from "@/config/firebase";

const Manage: NextPage = () => {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

  return (
    <form onSubmit={handleAdd} className="max-w-screen-sm mx-auto">
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
        <button type="submit" className="primary-btn">
          Add Member
        </button>
      </div>
    </form>
  );
};

export default Manage;
