import React from "react";
import Intro from "./components/intro";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";
import Header from "./components/header";

export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Intro />
        <Bio />
        <Portfolio />
      </div>
    );
  }
}
