import React from "react";
import ReactDOM from "react-dom/client";
import Case2 from "./Case2";
import data from './mocks/func.json';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Case2 data={data}/>
  </React.StrictMode>
);
