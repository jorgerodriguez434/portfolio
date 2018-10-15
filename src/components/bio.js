import React from "react";

export default class Bio extends React.Component {
  render() {
    return (
      <div id="bio">
       <h2> About Me</h2>
        <img
          src="https://previews.dropbox.com/p/thumb/AANPvCwSVc1RxsVqPIL_RsBO_VKIFMg6LcPOTIt-uTBrKAqJANJhU1Zr4PJCQtWguuo09I71QNgnfNwds1grxWmJc3P6E8gN_nHY5XWZ9viqMu9vfgCfWrMkiGvhWcKXH-H6fAJjbMEKDRWKTFmBw5ydwoaYvsOYQBO3Gaoqy0X4lquzn1GKRe-rJthp5BMHj6b8W5pKL3fIekqe57d4Z-17w8XMK5Z2G3X4sxg4cj5-Ug/p.jpeg?size=2048x1536&size_mode=3"
          alt="skydiving"
        />
        <section className="bio-div">
          <div className="bio-intro">
            <p className=""> Here's a little bit about me: </p>
            <p className="" aria-live="polite">
              {" "}
              I am a football(soccer) fanatic, movie watcher, chef, adventurer, and a full
              stack web developer{" "}
            </p>
          </div>
          <div>
            <p className="add-bottom-padding" aria-live="polite">
              I have experience with HTML, CSS, JAVASCRIPT, JQUERY, NODE JS, MONGOOSE, AND
              REACT JS
            </p>
          </div>
        </section>
      </div>
    );
  }
}
