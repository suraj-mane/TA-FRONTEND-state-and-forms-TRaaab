import React from "react";
import { render } from "react-dom";
import App from "./App";
export default function Show() {
  return <><App /></>;
}

render(<Show />, document.getElementById("root"));
