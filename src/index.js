import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import Links from "./components/links";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Links />
        <Main />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
