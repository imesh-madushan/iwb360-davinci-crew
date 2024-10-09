import React from "react";
import { useState } from 'react';
import Post from "../../components/post/post";
import './home.css'

const cardData = [{
    creater: 'John Doe',
    title: 'Students Meetup',
    date: '2021-10-10',
    time: '10:00 AM',
    url: 'https://meet.google.com/xyz',
    description: 'This is a meetup for students to discuss their problems and find solutions.',
},
{
    creater: 'Jane Doe',
    title: 'Teachers Meetup',
    date: '2021-10-11',
    time: '11:00 AM',
    url: 'https://meet.google.com/abc',
    description: 'This is a meetup for teachers to discuss their problems and find solutions.',
},
{
    creater: 'John Doe',
    title: 'Students Meetup',
    date: '2021-10-10',
    time: '10:00 AM',
    url: 'https://meet.google.com/xyz',
    description: 'This is a meetup for students to discuss their problems and find solutions.',
},
];

const Home = () => {
    return (
        <div className="home">
            <div className="postWrapper">
                {cardData.map((data, index) => (
                    <Post
                        key={index}
                        creater={data.creater}
                        title={data.title}
                        date={data.date}
                        time={data.time}
                        url={data.url}
                        description={data.description}
                    />
                ))
                }
            </div>
        </div>
    );
}

export default Home;