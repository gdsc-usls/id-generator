import React, { useState } from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  const [studentId, setStudentId] = useState("");

  return (
    <section className="max-w-screen-sm mx-auto">
      <div className="relative font-semibold text-4xl mb-4 self-start">
        <h1 className="z-10 relative">Enter your Student ID</h1>
        <div className="w-[190px] h-[8px] bg-primary absolute left-[185px] bottom-1" />
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push(`member/${studentId}`);
        }}
        className="flex space-x-3"
      >
        <input
          type="text"
          required
          minLength={7}
          maxLength={7}
          value={studentId}
          onChange={(e) => setStudentId(e.target.value)}
          className="input"
          placeholder="Student ID"
        />

        <button type="submit" className="fill-btn bg-primary flex-none">
          Locate ID
        </button>
      </form>
    </section>
  );
};

export default Home;
