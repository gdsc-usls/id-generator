import React from "react";
import { Error } from "@/components";

const Error404 = () => {
  return (
    <Error
      code={404}
      content={<p>The page you are looking for could not be found.</p>}
    />
  );
};

export default Error404;
