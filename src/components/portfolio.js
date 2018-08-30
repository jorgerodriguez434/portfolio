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
      <div id="portfolio">
        <p> This is my </p>
        <p className="font-40 less-margin"> Portfolio </p>
        <img
          src="https://user-images.githubusercontent.com/18128525/43462848-cb1ac958-949c-11e8-9eb5-23747c992f1a.png"
          alt="chef-app"
        />
      <section className="project-description">
        <p> 
          This is an app that is for anyone that loves to cook! You can create your own recipes,
          and modify them as you like! The app will place your dish in one or more of the following
          categories: gluten-free, vegan, vegeterian, dairy-free, and meats!
        </p>
      </section>
        <button  onClick={this.chefApp}> Live app</button>
        <button className="margin-bottom" onClick={this.chefAppCode}> Github</button>
        <img
          src="https://user-images.githubusercontent.com/18128525/39194207-cc4194ac-47a2-11e8-9a32-06630e403276.png"
          alt=""
        />
        <section className="project-description">
         <p> 
          This is an app that let's you add youtube videos using Youtube's API! I wanted to create an
          app that allowed me to save songs that I love! You can add any song, and as long as there is 
          song video for it on youtube, it will save it on the app!
        </p>
        </section>
        <button onClick={this.songOrganizer}> Live app</button>
        <button className="margin-bottom" onClick={this.songOrganizerCode}> Github</button>
        <img
          src="https://user-images.githubusercontent.com/18128525/36384655-a3b192dc-1555-11e8-818a-e877beb22bb6.png"
          alt=""
        />
        <section className="project-description">
          <p> 
          This was my first app! I used the movie database API, and I created this movie app because I
          like to watch movies, and this app let's me know whats popular! It has movies by action, comedy, crime, 
          drama, and family!
        </p>
        </section>
        <button onClick={this.movieApp}> Live app</button>
        <button className="margin-bottom" onClick={this.movieAppCode}> Github </button>
      </div>
    );
  }
}


//<Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/>