import React from "react";
import { useState } from 'react';
import HomeIcon from '@mui/icons-material/Home';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { RiLogoutCircleRLine } from "react-icons/ri";
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
                        <a href="/"><HomeIcon className="icon" /> Home</a>
                    </div>
                    <div className="out">
                        <a href="/create"><AddCircleOutlineIcon className="icon"/>Create</a>
                    </div>
                    <div className="myevents out grp">
                        <a onClick={triggerShowMyevents}>
                            <EventNoteIcon className="icon" />My Eevents
                            {isMyeventsShow ? (<KeyboardArrowDownIcon className="arrow" />) : (<KeyboardArrowRightIcon className="arrow" />)}
                        </a>
                        {isMyeventsShow ? (
                            <div className="list">
                                <a href="/myongoings">ongoing</a>
                                <a href="/myupcommings">upcomming</a>
                            </div>
                        ) : <></>}
                    </div>
                    <div className="enrolled out grp">
                        <a onClick={triggerShowEnrolled}>
                            <SubscriptionsIcon className="icon" />Enrolled
                            {isEnrolledShow ? (<KeyboardArrowDownIcon className="arrow" />) : (<KeyboardArrowRightIcon className="arrow" />)}
                        </a>
                        {isEnrolledShow ? (
                            <div className="list">
                                <a href="/enongoings">ongoing</a>
                                <a href="/enupcommings">upcomming</a>
                            </div>
                        ) : <></>}
                    </div>
                    <div className="booksmarks out grp">
                        <a onClick={triggerShowBooksmarks}>
                            <BookmarksIcon className="icon" />WishList
                            {isBooksmarksShow ? (<KeyboardArrowDownIcon className="arrow" />) : (<KeyboardArrowRightIcon className="arrow" />)}    
                        </a>
                        {isBooksmarksShow ? (
                            <div className="list">
                                <a href="/wiongoings">ongoing</a>
                                <a href="/wiupcommings">upcomming</a>
                            </div>
                        ) : <></>}
                    </div>
                </div>
                <div className="logOut"><RiLogoutCircleRLine className="icon" onClick={signOut}/><span onClick={signOut}>SignOut</span></div>
            </aside>
        </>
    );
}

export default SideBar;