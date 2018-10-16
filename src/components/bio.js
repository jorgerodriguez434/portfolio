import React from "react";

export default class Bio extends React.Component {
  render() {
    return (
      <section id="bio" className="about-me-container">
   
      <div className="me"> 
        <img
          src="https://image.ibb.co/bRdoVf/jorge-2.jpg"
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
               to use my skillset to enhance the lives of others.
            </p>
          </section>
      
           
      
        </div>
      </section>
    );
  }
}
