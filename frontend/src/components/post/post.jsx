import React from "react";
import { useState } from 'react';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import userLogoPng from '../../assests/user.png';
import './post.css';

const Post = ({creater, title, date, time, url, description}) => {
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
                <p>Time: {time}</p>
                <p>URL: <a href={url}>{url}</a></p>
                <p className="desc">{description}</p>
            </div>
            <div className="actions">
                <button onClick={triggerEnrolled} className={enrolled ? 'active' : ''}>{enrolled ? "Enrolled" : "Enroll"}</button>
                {enrolled ? (<></>):(
                    <>
                        {bookmark ? (
                            <BookmarkAddedIcon onClick={triggerBookmark} className="bmark icon" />
                        ):(
                            <BookmarkBorderIcon onClick={triggerBookmark} className="bmark icon" />
                        )}
                    </>
                )}
                
            </div>
        </div>
    )
}

export default Post;