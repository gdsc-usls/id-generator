/* eslint-disable @next/next/no-img-element */
import React from "react";

export const Output = React.forwardRef(
  ({ data }: { data?: Member }, ref: React.ForwardedRef<HTMLDivElement>) => {
    const position = (data?.position && data?.position.split("*")) || [];

    return (
      <div ref={ref} className="relative w-[400px]">
        <div className="absolute left-0 right-0 top-36 mx-auto text-center text-[#676c72]">
          <p className="text-3xl font-bold">{data?.firstName}</p>
          <p className="text-xl">{data?.lastName}</p>

          <div className="mt-12 text-lg tracking-wide">
            {position.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <img
          className="w-full object-contain"
          src={
            position[0] && position[0].includes("Chief")
              ? "/assets/id_2.png"
              : "/assets/id_1.png"
          }
          alt="id"
        />
      </div>
    );
  }
);

Output.displayName = "Output";
