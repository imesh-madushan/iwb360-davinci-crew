import React from "react";
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import SettingsIcon from '@mui/icons-material/Settings';
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
                        <a href="/"><HomeIcon className="icon" /> <span>Home</span></a>
                    </div>
                    <div className="out">
                        <a href="/create"><AddCircleOutlineIcon className="icon" /><span>Create</span></a>
                    </div>
                    <div className="myevents out grp">
                        <a href="/myevents">
                            <EventNoteIcon className="icon" /><span>My Eevents</span>
                        </a>
                    </div>
                    <div className="enrolled out grp">
                        <a href="/enrolled">
                            <SubscriptionsIcon className="icon" /><span>Enrolled</span>
                        </a>
                    </div>
                    <div className="wishlist out grp">
                        <a href="/wishlist">
                            <BookmarksIcon className="icon" /><span>WishList</span>
                        </a>
                    </div>
                    <div className="invited out grp">
                        <a href="/invited">
                            <AlternateEmailIcon className="icon" /><span>Invited</span>
                        </a>
                    </div>
                </div>
                <div className="out settings">
                    <a href="/settings">
                        <SettingsIcon className="icon" /><span>Settings</span>
                    </a>
                </div>
            </aside>
        </>
    );
}

export default SideBar;