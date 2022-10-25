import React from "react";
import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const { push } = useRouter();
  return (
    <section className='max-w-screen-sm mx-auto'>
      <div className="font-semibold text-5xl mb-8 self-start">
        <h1>Enter your USLS</h1>
        <div className="relative">
          <h1 className="z-10 relative">Student ID</h1>
          <div className="w-[250px] h-[12px] bg-primary absolute -left-1 bottom-1" />
        </div>
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          push("/result");
        }}
        className="flex space-x-3"
      >
        <input
          type="text"
          required
          minLength={7}
          maxLength={7}
          className="input"
          placeholder="Student ID"
        />

        <button type="submit" className="fill-btn bg-primary flex-none">
          Generate ID
        </button>
      </form>
    </section>
  );
};

export default Home;
