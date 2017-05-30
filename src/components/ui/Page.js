/* eslint-disable react/prop-types */
import React from 'react';
import HomeIcon from 'react-icons/lib/fa/home';
import { Link } from 'react-router';
// import '../../../stylesheets/Page.scss';

const selectedStyle = {
  backgroundColor: 'white',
  color: 'slategray'
};

const MainMenu = () => (
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

const Page = ({children}) => (
  <div className="page">
    <MainMenu/>
    {children}
  </div>
);

export default Page;