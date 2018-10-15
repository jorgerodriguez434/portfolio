import React from "react";

export default class Bio extends React.Component {
  render() {
    return (
      <section id="bio" className="about-me-container">
   
      <div className="me"> 
        <img
          src="https://previews.dropbox.com/p/thumb/AANPvCwSVc1RxsVqPIL_RsBO_VKIFMg6LcPOTIt-uTBrKAqJANJhU1Zr4PJCQtWguuo09I71QNgnfNwds1grxWmJc3P6E8gN_nHY5XWZ9viqMu9vfgCfWrMkiGvhWcKXH-H6fAJjbMEKDRWKTFmBw5ydwoaYvsOYQBO3Gaoqy0X4lquzn1GKRe-rJthp5BMHj6b8W5pKL3fIekqe57d4Z-17w8XMK5Z2G3X4sxg4cj5-Ug/p.jpeg?size=2048x1536&size_mode=3"
          alt="skydiving"
          className="circle"
        />
      </div>
        <div className="bio-div">
          <section className="bio-intro">
          <h2> About Me</h2>
            <p className="" aria-live="polite">
              {" "}
                My name is Jorge! I am a Full Stack Developer!
                My stack consists of MongoDB, Express, React, and
                Node. I am highly adaptable, and always eager to learn new
                technologies!
      
            </p>

             <p className="add-bottom-padding" aria-live="polite">
              I was born in Chicago, and have been in love with this city ever since.
              I like to travel and hope one day to see the world. I love to create new things. Helping others is one of my own
              motivations to succeed in life.
            </p>
          </section>
      
           
      
        </div>
      </section>
    );
  }
}
