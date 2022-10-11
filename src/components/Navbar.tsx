import React from "react";
import Image from "next/image";

export const Navbar = () => {
  return (
    <nav className="pt-6 mb-16 flex items-center justify-between text-sm">
      <div className="flex items-center space-x-2">
        <Image
          src="/assets/gdsc_logo.png"
          objectFit="contain"
          height={40}
          width={70}
        />
        <p>GDSC - USLS</p>
      </div>

      <a className="fill-btn">Become a Member!</a>
    </nav>
  );
};
