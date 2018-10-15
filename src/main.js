import React from "react";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";


export default class Main extends React.Component {
  render() {
    return (
    <div>


      <div className="main-container">
        <Bio />
      </div>

       <div className="main-container">
        <Portfolio />
      </div>


    </div>
    );
  }
}
