import React, { useRef, useCallback } from "react";
import { useReactToPrint } from "react-to-print";
import { doc } from "firebase/firestore";
import { useRouter } from "next/router";
import { toPng } from "html-to-image";
import Hover from "react-3d-hover";

import { useDoc } from "@/hooks";
import { db } from "@/config/firebase";
import { Card, Error, Output } from "@/components";
import { HiDownload, HiPrinter } from "react-icons/hi";

const Member = () => {
  const { query } = useRouter();
  const [data, loading] = useDoc<Member>(doc(db, `members/${query.id}`));

  const cardRef = useRef<HTMLDivElement>(null);
  const printRef = useRef<HTMLDivElement>(null);

  const handlePrint = useReactToPrint({
    content: () => printRef.current,
  });

  const handleDownload = useCallback(() => {
    if (cardRef.current === null) {
      return;
    }

    toPng(cardRef.current, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `gdsc_id_${query.id}.png`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.log(err);
      });
  }, [cardRef, query.id]);

  if (loading) {
    return (
      <div className="flex justify-center mt-52">
        <span className="loader" />
      </div>
    );
  }

  if (!data.position) {
    return (
      <Error content="We could not generate your ID, did you make a typo? You need to be an official member in order to generate an ID badge." />
    );
  }

  return (
    <section className="flex flex-col items-center w-[350px] md:w-[400px] mx-auto md:mt-24">
      <div ref={cardRef}>
        <Hover perspective={900}>
          <Card data={data} />
        </Hover>
      </div>

      <div className="hidden">
        <Output ref={printRef} data={data} />
      </div>

      <div className="self-end text-xl mt-2 space-x-2">
        <button
          type="button"
          onClick={handlePrint}
          className="rounded p-2 bg-primary-200"
        >
          <HiPrinter />
        </button>

        <button
          type="button"
          onClick={handleDownload}
          className="rounded p-2 bg-primary-100"
        >
          <HiDownload />
        </button>
      </div>
    </section>
  );
};

export default Member;
