import React from "react";
import { useState, useContext} from 'react';
import { AuthContext } from "../../context/authContext";
import Post from "../../components/post/post";
import './home.css'

const cardData = [{
    creater: 'John Doe',
    title: 'Students Meetup',
    date: '2021-10-10',
    start: '10:00 AM',
    end: '12:00 PM',
    url: 'https://meet.google.com/xyz',
    description: 'This is a meetup for students to discuss their problems and find solutions.',
},
{
    creater: 'Jane Doe',
    title: 'Teachers Meetup',
    date: '2021-10-11',
    start: '11:00 AM',
    end: '12:00 PM',
    url: 'https://meet.google.com/abc',
    description: 'This is a meetup for teachers to discuss their problems and find solutions.',
},
{
    creater: 'John Doe',
    title: 'Students Meetup',
    date: '2021-10-10',
    start: '10:00 AM',
    end: '12:00 PM',
    url: 'https://meet.google.com/xyz',
    description: 'This is a meetup for students to discuss their problems and find solutions.',
},
];

const Home = () => {
    const {isAuthenticated} = useContext(AuthContext);

    return (
        <div className="home">
            {isAuthenticated ? (
                <div className="postWrapper">
                {cardData.map((data, index) => (
                    <Post
                        key={index}
                        creater={data.creater}
                        title={data.title}
                        date={data.date}
                        start={data.start}
                        end={data.end}
                        url={data.url}
                        description={data.description}
                    />
                ))
                }
            </div>
            ) : (
                <div className="guest">
                    <div className="content">
                        <h4>Welcome to the Home Page</h4>
                        <p>Please login to view the posts</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;