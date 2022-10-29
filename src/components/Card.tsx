import React from "react";
import Image from "next/image";

export const Card = ({ data }: { data: Member }) => {
  const position = data.position.split(" ");

  return (
    <div className="relative">
      <div className="absolute left-0 right-0 top-32 mx-auto text-center text-[#676c72] z-10">
        <p className="text-3xl font-bold">{data.firstName}</p>
        <p className="text-xl">{data.lastName}</p>

        <div className="mt-12 text-lg">
          {position.length >= 3 ? (
            <>
              <p>
                {position[0]} {position[1]}
              </p>
              <p>{position[2]}</p>
            </>
          ) : (
            <p>{data.position}</p>
          )}
        </div>
      </div>

      <Image
        height={500}
        width={350}
        objectFit="contain"
        className="rounded-md pointer-events-none"
        src={position[0] == "Chief" ? "/assets/id_2.png" : "/assets/id_1.png"}
        alt="gdsc id"
      />
    </div>
  );
};
