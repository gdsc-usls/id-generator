import React from "react";
import type { NextPage } from "next";
import Hover from "react-3d-hover";

import { Card } from "@/components";

const Result: NextPage = () => {
  return (
    <section className="flex flex-col items-center w-[350px] mx-auto">
      <div className="font-semibold text-5xl mb-8 self-start">
        <h1>SHEESH,</h1>
        <div className="relative">
          <h1 className="z-10 relative">Here&apos;s your ID!</h1>
          <div className="w-[190px] h-[12px] bg-primary absolute -right-2 bottom-1" />
        </div>
      </div>

      <div className="hidden lg:block">
        <Hover perspective={900}>
          <Card />
        </Hover>
      </div>

      <div className="lg:hidden">
        <Card />
      </div>

      <button
        type="button"
        className="self-end mt-4 hover:underline outline-none"
      >
        Download Image
      </button>
    </section>
  );
};

export default Result;
