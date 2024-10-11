import React from "react";
import { useState } from 'react';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import BookmarkAddedRoundedIcon from '@mui/icons-material/BookmarkAddedRounded';
import userLogoPng from '../../assests/user.png';
import './post.css';

const Post = ({creater, title, date, start, end, description}) => {
    const [enrolled, setEnrolled] = useState(false);
    const [bookmark, setBookmark] = useState(false);

    const triggerEnrolled = () => {
        setEnrolled(!enrolled);
        setBookmark(false);
    }
    const triggerBookmark = () => {
        setBookmark(!bookmark);
    }

    return (
        <div className="post">
            <div className="creater">
                <img src={userLogoPng} alt="" />
                <p>{creater}</p>
            </div>
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
                <button onClick={triggerEnrolled} className={enrolled ? 'active' : ''}>{enrolled ? "Enrolled" : "Enroll"}</button>
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