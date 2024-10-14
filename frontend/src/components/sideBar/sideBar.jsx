import React from "react";
import { useState, useEffect, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './sideBar.css';


const SideOptionDiv = ({index, name, icon, link}) => {
    const ref = useRef(null);

    const Icon = icon;
    
    const handleMouseEnterSideOption = (event) => {
        const icon = event.currentTarget.querySelector(".icon");
        const span = event.currentTarget.querySelector("span");
        
        gsap.to(icon, {
            rotate: -10,
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(span, {
            scale: 1.05,
            x: 5,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    const handleMouseLeaveSideOption = (event) => {
        const icon = event.currentTarget.querySelector(".icon");
        const span = event.currentTarget.querySelector("span");

        gsap.to(icon, {
            rotate: 0,
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });

        gsap.to(span, {
            scale: 1,
            x: 0,
            duration: 0.3,
            ease: "power2.out"
        });
    };

    return (
        <div className="out" key={index}>
            <a href={link} onMouseEnter={handleMouseEnterSideOption} onMouseLeave={handleMouseLeaveSideOption}>
                <Icon className="icon" /><span>{name}</span>
            </a>
        </div>
    );
};

const SideBar = () => {
    const sideOptions = [
        {
            name: "Home",
            icon: HomeRoundedIcon,
            link: "/"
        },
        {
            name: "Create",
            icon: AddCircleOutlineRoundedIcon,
            link: "/create"
        },
        {
            name: "My Events",
            icon: EventNoteRoundedIcon,
            link: "/myevents"
        },
        {
            name: "Enrolled",
            icon: SubscriptionsRoundedIcon,
            link: "/enrolled"
        },
        {
            name: "WishList",
            icon: BookmarksRoundedIcon,
            link: "/wishlist"
        },
        {
            name: "Invited",
            icon: AlternateEmailRoundedIcon,
            link: "/invited"
        }
    ];

    return (
        <>
            <aside className="sideBar">
                <div className="links">
                    {sideOptions.map((option, index) => (
                        <SideOptionDiv
                            key={index}
                            index={index}
                            name={option.name}
                            icon={option.icon}
                            link={option.link}
                        />
                    ))}
                </div>
                <div className="out settings">
                    {
                        <SideOptionDiv
                            index={sideOptions.length}
                            name={"Settings"}
                            icon={SettingsRoundedIcon}
                            link={"/settings"}
                        />
                    }
                </div>
            </aside>
        </>
    );
}

export default SideBar;