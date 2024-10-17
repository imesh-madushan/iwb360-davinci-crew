import React from "react";
import { useState, useEffect, useRef } from 'react';
import BusinessLogo from '../../assests/logo-color2.png';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import UserLogo from '../../assests/user.png';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import './navBarAfterAuth.css';

const newNotifications = 22;

const NavBarAfterAuth = () => {
    const [isProDropdownShow, setIsProDropdownShow] = useState(false);
    const dropDownRef = useRef(null);
    const notifiRef = useRef(null);

    const toggleDropdown = () => {
        if (isProDropdownShow) {
            hideDropdown();
        } else {
            setIsProDropdownShow(true);
        }
    };

    const showDropdown = () => {
        gsap.fromTo(dropDownRef.current, {
            y: -10,
            opacity: 0,
            ease: "power2.out"
        },
            {
                duration: 0.2,
                y: 0,
                opacity: 1,
                ease: "power2.in"
            });
    };

    const hideDropdown = () => {
        gsap.to(dropDownRef.current, {
            duration: 0.2,
            y: -10,
            opacity: 0,
            ease: "power2.out",
            onComplete: () => setIsProDropdownShow(false) // Hide after animation
        });
    };

    const handleNotifiHover = () => {
        gsap.fromTo(notifiRef.current,
            {
                rotation: -6
            },
            {
                rotation: 6,
                duration: 0.1,
                repeat: 3,
                yoyo: true,
                ease: "power1.inOut",
                onComplete: () => {
                    gsap.set(notifiRef.current, { x: 0, rotation: 0 });
                }
            }
        );
    }

    // Close dropdown when click outside
    useEffect(() => {
        const handleOutsideClick = (e) => {
            if (dropDownRef.current.contains(e.target) || e.target.classList.contains("img")) {
                return;
            }
            hideDropdown();
        };

        if (isProDropdownShow) {
            showDropdown();
            document.addEventListener("mousedown", handleOutsideClick);
        }
        else {
            document.removeEventListener("mousedown", handleOutsideClick);
        }

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, [isProDropdownShow]);

    const signOut = () => {
        console.log('signOut');
    }

    return (
        <>
            <header className="navAAuth">
                <div className="logo">
                    <a href="/"><img src={BusinessLogo} alt="" /></a>
                </div>

                <div className="midcontainer">
                    <div className="search">
                        <SearchRoundedIcon className="icon" />
                        <hr />
                        <input type="text" placeholder="Search..." />
                    </div>
                </div>

                <div className="links">
                    <a href="/notifications" onMouseEnter={handleNotifiHover}>
                        <NotificationsRoundedIcon className="notifi" ref={notifiRef} />
                        {newNotifications > 0 && <div className="count">{newNotifications}</div>}
                    </a>
                    <div className="profile">
                        <img src={UserLogo} alt="" className="img" onClick={toggleDropdown} />

                        {isProDropdownShow &&
                            <div className="drop" ref={dropDownRef}>
                                <a href="/profile">View Info</a>
                                <a href="/settings">Settings</a>
                                <a onClick={signOut} className="signout">Sign Out</a>
                            </div>
                        }

                    </div>
                </div>
                
            </header>
        </>
    );
};

export default NavBarAfterAuth;