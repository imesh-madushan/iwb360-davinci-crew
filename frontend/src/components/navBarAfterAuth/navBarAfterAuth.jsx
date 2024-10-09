import React from "react";
import { useState } from 'react';
import BusinessLogo from '../../assests/logo-color2.png';
import BellIcon from '../../assests/bell.png';
import UserLogo from '../../assests/user.png';
import { IoIosSearch } from "react-icons/io";
import './navBarAfterAuth.css';

const newNotifications = 22;

const NavBarAfterAuth = () => {
  return (
    <>
      <header className="navAAuth">
        <div className="logo">
          <a href="/"><img src={BusinessLogo} alt=""/></a>
        </div>
        <div className="search">
          <IoIosSearch className="icon"/>
          <input type="text" placeholder="Search..." />
        </div>
        <div className="links">
            <a href="/notifications">
              <img src={BellIcon} alt="" className="notifi"/>
              {newNotifications > 0 && <div className="count">{newNotifications}</div>}
            </a>
            <a href="/profile">
              <img src={UserLogo} alt="" className="profile"/>
            </a>
        </div>
      </header>
    </>
  );
};

export default NavBarAfterAuth;