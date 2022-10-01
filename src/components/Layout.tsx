import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto w-[90%] max-w-screen-lg xl:w-full">
      {children}
    </main>
  );
};
