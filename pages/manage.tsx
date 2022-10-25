import React, { useState } from "react";
import type { NextPage } from "next";

const Manage: NextPage = () => {
  const [studentId, setStudentId] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <section className="max-w-screen-sm mx-auto">
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
    </section>
  );
};

export default Manage;
