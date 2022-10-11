/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Card = () => {
  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-32 mx-auto text-center text-[#676c72]">
        <p className="text-3xl font-bold">Josh Daniel</p>
        <p className="text-xl">Bañares</p>
        <p className="mt-12 text-lg">
          Technology <br />
          Co-Lead
        </p>
      </div>

      <img
        className="w-full object-contain rounded-md pointer-events-none"
        src="/assets/id_1.png"
        alt="id"
      />
    </div>
  );
};
