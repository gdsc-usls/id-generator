import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu } from "./Menu";

export const Navbar = () => {
  return (
    <nav className="pt-6 mb-16 flex items-center justify-between">
      <Link href="/">
        <div className="flex items-center space-x-2 cursor-pointer">
          <Image
            alt="GDSC Logo"
            src="/assets/gdsc_logo.png"
            objectFit="contain"
            height={40}
            width={70}
          />
          <p>GDSC - USLS</p>
        </div>
      </Link>

      <Menu />
    </nav>
  );
};
