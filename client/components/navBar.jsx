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
        <li className="hidden">
          <Link to="theatrical">
            <p>Theatrical</p>
          </Link>
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
