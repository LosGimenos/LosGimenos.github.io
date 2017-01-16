import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <ul id="nav-bar-links">
        <li>
          <Link to="about" id="nav-about">
            <p>About</p>
          </Link>
        </li>
        <li>
          <Link to="web-development">
            <p>Web</p>
          </Link>
        </li>
        <li>
          <a href="https://losgimenos.github.io/enzoThinks/" target="_blank">
            <p>Blog</p>
          </a>
        </li>
        </ul>
          <Link to="/">
            <div className="chalchi">
              <h3>Lorenzo Sari&ntilde;ana</h3>
            </div>
          </Link>
    </div>
  );
}

export default NavBar;
