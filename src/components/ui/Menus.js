/* eslint-disable react/prop-types */
import React from 'react';
import HomeIcon from 'react-icons/lib/fa/home';
import { Link } from 'react-router';
import '../../../stylesheets/Pages.scss';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
};

export const MainMenu = () => (
  <nav className='main-menu'>
    <Link to='/'>
      <HomeIcon/>
    </Link>
    <Link to='about' activeStyle={selectedStyle}>
      [About]
    </Link>
    <Link to='events' activeStyle={selectedStyle}>
      [Events]
    </Link>
    <Link to='products' activeStyle={selectedStyle}>
      [Products]
    </Link>
    <Link to='contact' activeStyle={selectedStyle}>
      [Contact]
    </Link>
  </nav>
);

export const AboutMenu = () =>
  <div className="about-menu">
    <li>
      <Link to="/about" activeStyle={selectedStyle}>
        [Company]
      </Link>
    </li>
    <li>
      <Link to="/about/history" activeStyle={selectedStyle}>
        [History]
      </Link>
    </li>
    <li>
      <Link to="/about/services" activeStyle={selectedStyle}>
        [Services]
      </Link>
    </li>
    <li>
      <Link to="/about/location" activeStyle={selectedStyle}>
        [Location]
      </Link>
    </li>
  </div>;
