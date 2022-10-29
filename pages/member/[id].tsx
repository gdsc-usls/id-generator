import React, { useRef, useCallback } from "react";
import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { toPng } from "html-to-image";
import Hover from "react-3d-hover";

import { useDoc } from "@/hooks";
import { Card } from "@/components";
import { db } from "@/config/firebase";

const Member = () => {
  const { query, push } = useRouter();
  const [data, loading] = useDoc<Member>(doc(db, `members/${query.id}`));

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

  if (loading) {
    return (
      <div className="flex justify-center mt-52">
        <span className="loader" />
      </div>
    );
  }

  if (!data.firstName) {
    push("/404");
  }

  return (
    <section className="flex flex-col items-center w-[350px] mx-auto">
      <div className="relative font-semibold text-5xl mb-8 self-start">
        <h1 className="z-10 relative">Here&apos;s your ID!</h1>
        <div className="w-[190px] h-[12px] bg-primary absolute -right-2 bottom-1" />
      </div>

      <div ref={cardRef}>
        <div className="hidden lg:block">
          <Hover perspective={900}>
            <Card data={data} />
          </Hover>
        </div>

        <div className="lg:hidden">
          <Card data={data} />
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

export default Member;
