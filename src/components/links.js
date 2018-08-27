import React from "react";
//import { Link } from "react-router-dom";
import { HashLink as Link } from 'react-router-hash-link';

export default class Links extends React.Component {
  render() {
    return (
      <div className="link-group">
        <Link className="link" to="/bio#bio">Bio</Link>
        <Link className="link" to="/portfolio#portfolio">Portfolio</Link>
        <Link className="link" to="/github">Github</Link>
      </div>
    );
  }
}
