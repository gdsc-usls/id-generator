/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Card = ({ data }: { data?: Member }) => {
  const position = (data?.position && data?.position.split("*")) || [];

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-32 mx-auto text-center text-[#676c72]">
        <p className="text-3xl font-bold">{data?.firstName}</p>
        <p className="text-xl">{data?.lastName}</p>

        <div className="mt-12 text">
          {position.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>

      <img
        className="w-full object-contain rounded-md pointer-events-none"
        src={
          position[0] && position[0].includes("Chief")
            ? "/assets/id_2.png"
            : "/assets/id_1.png"
        }
        alt="id"
      />
    </div>
  );
};
