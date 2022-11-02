import React from "react";

interface Props {
  code?: number;
  content: React.ReactNode;
}

export const Error = ({ code, content }: Props) => {
  return (
    <section>
      <h1 className="font-semibold text-5xl mb-4">Oops! {code}</h1>
      {content}
      <a
        href="https://www.facebook.com/dsc.usls"
        target="_blank"
        rel="noreferrer noopener"
        className="fill-btn bg-primary mt-6 inline-block"
      >
        Contact Us
      </a>
    </section>
  );
};
