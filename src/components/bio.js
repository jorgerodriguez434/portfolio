import React from "react";

export default class Bio extends React.Component {
  render() {
    return (
      <div id="bio">
        <img
          src="https://scontent-ort2-2.xx.fbcdn.net/v/t1.0-9/13659174_1407450855948378_4680258023476578118_n.jpg?_nc_cat=0&oh=cdd821253cc946aac681b78a05ea8625&oe=5BEDE62C"
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
