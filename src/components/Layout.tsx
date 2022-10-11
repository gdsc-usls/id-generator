import React from "react";
import { Navbar, Footer } from ".";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="mx-auto min-h-screen w-[90%] max-w-screen-lg xl:w-full">
        <Navbar />
        {children}
      </main>
      <Footer />
    </>
  );
};
