import React from "react";
import { useState } from 'react';
import BusinessLogo from '../../assests/logo-color2.png';
import UserLogo from '../../assests/user.png';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { IoIosSearch } from "react-icons/io";
import './navBarAfterAuth.css';

const newNotifications = 22;

const NavBarAfterAuth = () => {
  const [isProDropdownShow, setIsProDropdownShow] = useState(false);

  const triggerDropdown = () => {
    setIsProDropdownShow(!isProDropdownShow);
  }

  const signOut = () => {
    console.log('signOut');
  }

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
              <NotificationsRoundedIcon className="notifi"/>
              {newNotifications > 0 && <div className="count">{newNotifications}</div>}
            </a>
            <div className="profile">
              <img src={UserLogo} alt="" className="img" onClick={triggerDropdown}/>
              
              {isProDropdownShow ? (
                <div className="drop">
                  <a href="/infocurrentuser">View Info</a>
                  <a href="/settings">Settings</a>
                  <a onClick={signOut} className="signout">Sign Out</a>
                </div>) : (
                  null)
              }
              
            </div>
        </div>
      </header>
    </>
  );
};

export default NavBarAfterAuth;