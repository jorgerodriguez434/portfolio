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
        <img
          src="https://itp.live/sites/default/files/styles/full_img/public/images/2017/11/28/Editing-Images-Without-Photoshop.jpg"
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
        </div>



        <div className="project">  
        <img
          src="https://images.pexels.com/photos/450035/pexels-photo-450035.jpeg?auto=compress&cs=tinysrgb&h=350"
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
        </div>



         <div className="project">  
        <img
          src="https://image.freepik.com/free-photo/successful-computer-gadget-digital-close_1220-888.jpg"
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



    </div>
</div>
    );
  }
}


//<Route path='/privacy-policy' component={() => window.location = 'https://example.zendesk.com/hc/en-us/articles/123456789-Privacy-Policies'}/>