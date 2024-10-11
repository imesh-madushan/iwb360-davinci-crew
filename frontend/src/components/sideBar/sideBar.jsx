import React from "react";
import { useState } from 'react';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import EventNoteRoundedIcon from '@mui/icons-material/EventNoteRounded';
import SubscriptionsRoundedIcon from '@mui/icons-material/SubscriptionsRounded';
import BookmarksRoundedIcon from '@mui/icons-material/BookmarksRounded';
import AddCircleOutlineRoundedIcon from '@mui/icons-material/AddCircleOutlineRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import './sideBar.css';

const signOut = () => {
    console.log('signOut');
}

const SideBar = () => {
    const [isMyeventsShow, setIsMyeventsShow] = useState(false);
    const [isEnrolledShow, setIsEnrolledShow] = useState(false);
    const [isBooksmarksShow, setIsBooksmarksShow] = useState(false);


    const triggerShowMyevents = () => {
        setIsMyeventsShow(!isMyeventsShow);
    }
    const triggerShowEnrolled = () => {
        setIsEnrolledShow(!isEnrolledShow);
    }
    const triggerShowBooksmarks = () => {
        setIsBooksmarksShow(!isBooksmarksShow);
    }

    return (
        <>
            <aside className="sideBar">
                <div className="links">
                    <div className="out">
                        <a href="/"><HomeRoundedIcon className="icon" /> <span>Home</span></a>
                    </div>
                    <div className="out">
                        <a href="/create"><AddCircleOutlineRoundedIcon className="icon" /><span>Create</span></a>
                    </div>
                    <div className="myevents out grp">
                        <a href="/myevents">
                            <EventNoteRoundedIcon className="icon" /><span>My Eevents</span>
                        </a>
                    </div>
                    <div className="enrolled out grp">
                        <a href="/enrolled">
                            <SubscriptionsRoundedIcon className="icon" /><span>Enrolled</span>
                        </a>
                    </div>
                    <div className="wishlist out grp">
                        <a href="/wishlist">
                            <BookmarksRoundedIcon className="icon" /><span>WishList</span>
                        </a>
                    </div>
                    <div className="invited out grp">
                        <a href="/invited">
                            <AlternateEmailRoundedIcon className="icon" /><span>Invited</span>
                        </a>
                    </div>
                </div>
                <div className="out settings">
                    <a href="/settings">
                        <SettingsRoundedIcon className="icon" /><span>Settings</span>
                    </a>
                </div>
            </aside>
        </>
    );
}

export default SideBar;