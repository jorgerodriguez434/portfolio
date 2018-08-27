import React from "react";
//import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default class Links extends React.Component {

    gitHub(){
        window.location.assign("https://github.com/jorgerodriguez434");
    }
  render() {
    return (
      <div className="link-group">
        <Link className="link" to="/bio#bio">Bio</Link>
        <Link className="link" to="/portfolio#portfolio">Portfolio</Link>
        <Link className="link" onClick={this.gitHub} to="/github">Github</Link>
      </div>
    );
  }
}
