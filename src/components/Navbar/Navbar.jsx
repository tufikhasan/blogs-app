import React from 'react';
import './Navbar.scss';
import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
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
