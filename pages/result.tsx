import React, { useRef, useCallback } from "react";
import Hover from "react-3d-hover";
import type { NextPage } from "next";
import { toPng } from "html-to-image";

import { Card } from "@/components";

const Result: NextPage = () => {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleDownload = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "gdsc_id.png";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardRef]);

  return (
    <section className="flex flex-col items-center w-[350px] mx-auto">
      <div className="font-semibold text-5xl mb-8 self-start">
        <h1>SHEESH,</h1>
        <div className="relative">
          <h1 className="z-10 relative">Here&apos;s your ID!</h1>
          <div className="w-[190px] h-[12px] bg-primary absolute -right-2 bottom-1" />
        </div>
      </div>

      <div ref={cardRef}>
        <div className="hidden lg:block">
          <Hover perspective={900}>
            <Card />
          </Hover>
        </div>

        <div className="lg:hidden">
          <Card />
        </div>
      </div>

      <button
        type="button"
        onClick={handleDownload}
        className="self-end mt-4 hover:underline outline-none"
      >
        Download Image
      </button>
    </section>
  );
};

export default Result;
