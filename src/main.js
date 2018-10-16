import React from "react";
import Bio from "./components/bio";
import Portfolio from "./components/portfolio";

//https://s26626.pcdn.co/wp-content/uploads/2017/07/pexels-photo-297755-1024x668.jpeg
export default class Main extends React.Component {
  render() {
    return (
    <div>


      <div className="main-container">
        <div className="bio-banner"></div>
        <Bio />
      </div>

       <div className="main-container">
       <div className="portfolio-banner"></div>
        <Portfolio />
      </div>


    </div>
    );
  }
}
