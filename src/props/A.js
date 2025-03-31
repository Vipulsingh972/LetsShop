import React from "react";
import B from "./B";

function A() {
  const data = "Hello from A"; // Data to be passed
  return <B dataFromA={data} />;
}

export default A;