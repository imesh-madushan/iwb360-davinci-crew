import React, { useEffect } from "react";
import { useState, useRef } from 'react';
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import PersonAddAlt1RoundedIcon from '@mui/icons-material/PersonAddAlt1Rounded';
import userLogoPng from '../../assests/user.png';
import './post.css';

const Post = ({creater, title, date, start, end, description}) => {
    const [enrolled, setEnrolled] = useState(false);
    const [bookmark, setBookmark] = useState(false);
    const enrollRef = useRef(null);
    const followRef = useRef(null);

    //TODO: function to check if current user follows the creater
    const [isFollowing, setIsFollowing] = useState(false); 

    const triggerEnrolled = () => {
        setEnrolled(!enrolled);
        setBookmark(false);

        if (!enrolled) {
            gsap.fromTo(enrollRef.current, {
                ease: "power2.in",
            },
            {
                duration: 0.5,
                backgroundSize: "1000%",
                ease: "power2.in",
                onStart: () => {
                    enrollRef.current.style.color = "white";
                    enrollRef.current.textContent = "Enrolled";
                }
            });
        }

        else {
            gsap.to(enrollRef.current, {
                duration: 0.3,
                backgroundSize: "0%",
                color: "black",
                ease: "power2.out",
                onStart: () => {
                    enrollRef.current.textContent = " ";
                },
                onComplete: () => {
                    enrollRef.current.textContent = "Enroll";
                    gsap.to(enrollRef.current, {
                      duration: 0.1,
                      color: "#161D6F",
                      ease: "power2.out",
                    });
                },
            });
        }
    }
    const triggerBookmark = () => {
        setBookmark(!bookmark);
    }

    const handleFollow = () => {
        if (isFollowing) {
            const span = followRef.current.querySelector("span");
            gsap.to(span, {
                duration: 0.2,
                ease: "power2.in",
                backgroundSize: "0%",
                onComplete: () => {
                    setIsFollowing(!isFollowing);
                },
            });
        }
        else {
            const icon = followRef.current.querySelector(".icon");
            gsap.to(icon, {
                duration: 0.2,
                ease: "power2.in",
                rotation: 45,
                scale: 0.5,
                onComplete: () => {
                    setIsFollowing(!isFollowing);
                },
            });
        }
    }

    return (
        <div className="post">
            <div className="creater">
                <div className="info">
                    <img src={userLogoPng} alt="" />
                    <p>{creater}</p>
                </div>
                <div className="follow" onClick={handleFollow} ref={followRef}>
                    {isFollowing ? (
                        <span>following</span>
                    ):(
                        <PersonAddAlt1RoundedIcon className="icon" />
                    )}
                </div>
            </div>
            <hr className="devider"/>
            <div className="title">
                <h4>{title}</h4>
            </div>
            <div className="content">
                <p>Date: {date}</p>
                <p>Start: {start}</p>
                <p>End: {end}</p>
                <p className="desc">{description}</p>
            </div>
            <div className="actions">
                <button onClick={triggerEnrolled} ref={enrollRef}>Enroll</button>
                {enrolled ? (<></>):(
                    <>
                        {bookmark ? (
                            <BookmarkAddedRoundedIcon onClick={triggerBookmark} className="bmark icon" />
                        ):(
                            <BookmarkBorderRoundedIcon onClick={triggerBookmark} className="bmark icon" />
                        )}
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Post;