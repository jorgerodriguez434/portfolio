import React from "react";
import ReactDOM from "react-dom";
import Main from "./main";
import Links from "./components/links";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import Header from "./components/header";

//https://jorgerodriguez.herokuapp.com
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Links />
        <Header/>
        <Main />
      </div>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
