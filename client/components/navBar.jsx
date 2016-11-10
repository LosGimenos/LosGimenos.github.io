import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
  return (
    <div id="nav-bar">
      <Link to="about">About</Link>
      <a href="#">Stuff</a>
      <a href="#">Whatevs</a>
      <div className="chalchi">
        <h3>Lorenzo Sari&ntilde;ana</h3>
      </div>
    </div>
  );
}

export default NavBar;
