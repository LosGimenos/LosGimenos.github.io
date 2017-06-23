import React from 'react';
import { Link } from 'react-router';

const clickHandler = function() {
  if (document.body.clientWidth <= 980) {
    let element = document.querySelector('#nav-bar-links');
    element.style.display = element.style.display === 'block' ? 'none' : 'block';
  }
}

const NavBar = () => {
  return (
    <div id="nav-bar">
      <div className="nav-bar__title">
        <Link to="/">
          <h2>
              Larry Hernandez
          </h2>
        </Link>
      </div>

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
        <li>
          <Link to="contact">
          <p>Contact</p>
          </Link>
        </li>
      </ul>

      <div className="chalchi" onClick={clickHandler}>
      </div>

    </div>
  );
}

export default NavBar;
