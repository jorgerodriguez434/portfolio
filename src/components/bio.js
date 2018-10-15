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

             <p  aria-live="polite">
              I was born in Chicago, and have been in love with this city ever since.
              I like to travel and hope one day to see the world.
            </p>

            <p className="add-bottom-padding"> 

               One of the greatest perks of web development is having the 
               ablitiy to bring ideas to life, and this is why I fell in love
               with writing code. Web development has enriched my life, and I hope
               use my skillset to enhance the lives of others.
            </p>
          </section>
      
           
      
        </div>
      </section>
    );
  }
}
