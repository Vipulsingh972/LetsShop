import React from "react";
import C from "./C";

function B(props) {
  return <C dataFromB={props.dataFromA} />;
}

export default B;