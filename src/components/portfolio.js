import React from "react";

export default class Portfolio extends React.Component {

    chefApp(){
        window.location.assign("https://chef-app-client.herokuapp.com/");
       
    }
    chefAppCode(){
        window.location.assign("https://chef-app-client.herokuapp.com/");
    }

    songOrganizer(){
        window.location.assign("https://lychee-shortcake-58019.herokuapp.com/");
        
    }
    songOrganizerCode(){
      window.location.assign("https://lychee-shortcake-58019.herokuapp.com/");
    }

    movieApp(){
        window.location.assign(" https://jorgerodriguez434.github.io/movie-search-api/");
    }
    movieAppCode(){
      window.location.assign("https://lychee-shortcake-58019.herokuapp.com/");
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
        <button  onClick={this.chefApp}> Live app</button>
        <button className="margin-bottom"> Github</button>
        <img
          src="https://user-images.githubusercontent.com/18128525/39194207-cc4194ac-47a2-11e8-9a32-06630e403276.png"
          alt=""
        />
        <button onClick={this.songOrganizer}> Live app</button>
        <button className="margin-bottom"> Github</button>
        <img
          src="https://user-images.githubusercontent.com/18128525/36384655-a3b192dc-1555-11e8-818a-e877beb22bb6.png"
          alt=""
        />
        <button onClick={this.movieApp}> Live app</button>
        <button className="margin-bottom"> Github </button>
      </div>
    );
  }
}


//<Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/>