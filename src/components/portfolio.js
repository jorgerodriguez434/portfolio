import React from "react";

export default class Portfolio extends React.Component {

    chefApp(){
        window.location.assign("https://chef-app-client.herokuapp.com/");
       
    }
    chefAppCode(){
        window.location.assign("https://github.com/jorgerodriguez434/chef-app-client");
    }

    songOrganizer(){
        window.location.assign("https://lychee-shortcake-58019.herokuapp.com/");
        
    }
    songOrganizerCode(){
      window.location.assign("https://github.com/jorgerodriguez434/music-node-app");
    }

    movieApp(){
        window.location.assign(" https://jorgerodriguez434.github.io/movie-search-api/");
    }
    movieAppCode(){
      window.location.assign("https://github.com/jorgerodriguez434/movie-search-api");
    }

   
  render() {
    return (
  <div>
    <h2 className=""> PROJECTS</h2>
   
      <div id="portfolio" className="portfolio">
      
    <div className="project">
    <h3> Chef App</h3>   
        <img
          src="https://user-images.githubusercontent.com/18128525/43463105-7373d126-949d-11e8-8bc4-75d8cc3f0b32.png"
          alt="chef-app"
        />
      <section className="project-description">
      
        <p> 
          This is an app that is for anyone that loves to cook! You can create your own recipes,
          and modify them as you like! The app will place your dish in one or more of the following
          categories: gluten-free, vegan, vegeterian, dairy-free, and meats!
        </p>
        <p>Technology used: MongoDB, Express, React, and Node.js</p>
      </section>
        <button  onClick={this.chefApp}> Live app</button>
        <button className="margin-bottom" onClick={this.chefAppCode}> Github</button>
        </div>



        <div className="project">  
        <h3> Song Organizer</h3>   
        <img
          src="https://preview.ibb.co/mGxNMV/song.png"
          alt="song-organizer"
          className="future"
        />
        <section className="project-description">
         <p> 
          This is an app that let's you add youtube videos using Youtube's API! I wanted to create an
          app that allowed me to save songs that I love! You can add any song, and as long as there is 
          song video for it on youtube, it will save it on the app!
        </p>
        <p>Technology used: MongoDB, JQuery, Express, Node.js</p>
        </section>
        <button onClick={this.songOrganizer}> Live app</button>
        <button className="margin-bottom" onClick={this.songOrganizerCode}> Github</button>
        </div>



         <div className="project">  
         <h3> Movie Search</h3>   
        <img
        className="venom"
          src="https://preview.ibb.co/bEq6Fq/venom.png"
          alt="venom"
        />
        <section className="project-description">
          <p> 
          This was my first app! I used the movie database API, and I created this movie app because I
          like to watch movies, and this app let's me know whats popular! It has movies by action, comedy, crime, 
          drama, and family!
        </p>
        <p>Technology used: JavaScript, CSS, HTML, JQuery</p>
        </section>
        <button onClick={this.movieApp}> Live app</button>
        <button className="margin-bottom" onClick={this.movieAppCode}> Github </button>
        </div>



    </div>
</div>
    );
  }
}


//<Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/>