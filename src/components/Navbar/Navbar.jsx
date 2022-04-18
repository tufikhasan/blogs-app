import React from 'react';
import './Navbar.scss';
import { images } from '../../constants';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={images.logo} alt="Logo" />
        </Link>
      </div>
      <ul className="app__navbar-menu">
        {['home', 'about'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <Link to={`/${item === 'home' ? '' : item}`}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
