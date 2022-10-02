import React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="mx-auto min-h-screen w-[90%] max-w-screen-lg font-google xl:w-full">
      {children}
    </main>
  );
};
