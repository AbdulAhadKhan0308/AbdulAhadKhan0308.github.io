import { App } from "./App";
import ReactDOM from "react-dom";
import React from "react";
// Custom styles must load before Tailwind so utility classes take precedence.
import "../css/style.css";
import "./tailwind.css";

console.log("check app init2");

ReactDOM.render(<App />, document.getElementById("app"));
