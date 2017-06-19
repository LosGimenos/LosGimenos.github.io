import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <div className="nav-bar__title">
        <h2>
          Larry Hernandez
        </h2>
      </div>
      {
      // <Link to="/">
      //   <div className="chalchi">
      //   </div>
      // </Link>
      }
      <ul id="nav-bar-links">
        <li>
          <Link to="about" id="nav-about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="web-development">
            <p>Portfolio</p>
          </Link>
        </li>
        <li>
          <a href="https://losgimenos.github.io/enzoThinks/" target="_blank">
            <p>Blog</p>
          </a>
        </li>
        </ul>
    </div>
  );
}

export default NavBar;
