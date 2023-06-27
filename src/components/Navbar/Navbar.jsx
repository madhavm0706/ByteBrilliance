import React from 'react';
import logo from '../logo.png';
import './Navbar.css';

import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdFunnel } from 'react-icons/io';

const Navbar = () => {
  return (
    <div className='main-div'>
      <img className="logo" src={logo} alt="logo" />
      {/* <input type="checkbox" id="menu-toggle" / */}
      <ul className='links'>
        <li>who we are</li>
        <li>services</li>
        <li>our Portfolio</li>
        <li>why choose us</li>
        <li>contact us</li>
      </ul>
      <ul className='icons'>
        <li><AiOutlineSearch /></li>
        <li><IoMdFunnel /></li>
      </ul>
    </div>
  );
};

export default Navbar;
