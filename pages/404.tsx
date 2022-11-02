import React from "react";
import { Error } from "@/components";

const Error404 = () => {
  return (
    <Error
      code={404}
      content="The page you are looking for could not be found."
    />
  );
};

export default Error404;
