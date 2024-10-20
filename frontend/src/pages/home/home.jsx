import React from "react";
import { useState, useContext} from 'react';
import { AuthContext } from "../../context/authContext";
import Post from "../../components/ui/post/post";
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
                        description={data.description}
                    />
                ))
                }
            </div>
            ) : (
                <div className="guest">
                    <div className="content">
                        <div className="head">
                            <h1>Discover, Connect, and Join Events <br />Like Never Before !</h1>
                            <p>Dynamic platform where meeting planning meets social networking! Whether you're organizing an event or looking to join one, we make it easy and interactive.</p>
                        </div>
                        <section className="features">
                            <h2>What We Bring to You...</h2>
                            <div className="list">
                                <div className="row">
                                    <h3>Browse Public Meetings</h3>
                                    <p>Explore meetings posted by others, just like a social media feed. Each post includes event details to help you find what interests you.</p>
                                </div>
                                <div className="row">
                                    <h3>Enroll in Events</h3>
                                    <p>Found a meeting you like? Enroll with one click to get all the info you need.</p>
                                </div>
                                <div className="row">
                                    <h3>Save to Your List</h3>
                                    <p>Not ready to join? Save the meeting to your list and come back when you're ready.</p>
                                </div><div className="row">
                                    <h3>Follow and Connect</h3>
                                    <p> Follow users, stay updated on their meetings, and grow your event community.</p>
                                </div><div className="row">
                                    <h3>Private Meetings</h3>
                                    <p>Create invite-only meetings and send invites to selected people. Only they can join.</p>
                                </div>
                                <div className="row">
                                    <h3>Stay Notified</h3>
                                    <p>Get instant notifications when someone follows you, enrolls, or invites you to a meeting.</p>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Home;