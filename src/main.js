import React from "react";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";


export default class Main extends React.Component {
  render() {
    return (
      <div className="main-container">
        <Bio />
        <Portfolio />
      </div>
    );
  }
}
