import React from 'react';
import { useEffect, useState } from 'react';
import MyEventCard from '../../components/ui/myeventCard/myeventCard';
import './myEvents.css';


const MyEvents = () => {
    const [events, setEvents] = useState([
        {
            id: 1,
            name: 'Meeting 1',
            date: '2022-10-10',
            start: '10:00',
            end: '12:00',
            enrolled: 5,
            type: 'public',
            status: 'ongoing',
            desc: 'This is a meeting for discussing the project.',
        },
        {
            id: 2,
            name: 'Meeting 2',
            date: '2022-10-10',
            start: '11:00',
            end: '12:00',
            enrolled: 3,
            type: 'private',
            status: 'upcoming',
            desc: 'This is a meeting for discussing the project.',
        },
        {
            id: 3,
            name: 'Meeting 3',
            date: '2022-10-10',
            start: '10:00',
            end: '12:00',
            enrolled: 2,
            type: 'public',
            status: 'upcoming',
            desc: 'This is a meeting for discussing the project.',
        },
        {
            id: 4,
            name: 'Meeting 4',
            date: '2022-10-10',
            start: '11:00',
            end: '12:00',
            enrolled: 4,
            type: 'private',
            status: 'upcoming',
            desc: 'This is a meeting for discussing the project.',
        }
    ]);

    const editEvent = (event) => {
        console.log('Edit Event');
    }

    const joinEvent = (event) => {
        console.log('Join Event');
    }

    const startEvent = (event) => {
        if(events.some(e => e.status === 'ongoing')) {
            alert('Another event is already ongoing\nPlease end it first');
            return;
        }

        setEvents(events.map(e => e.id === event.id ? {...e, status: 'ongoing'} : e));
    }

    const endEvent = (event) => {
        setEvents(events.map(e => e.id === event.id ? {...e, status: 'ended'} : e));
    }

    const deleteEvent = (event) => {
        setEvents(events.filter(e => e.id !== event.id));
    }

    return (
        <div className='myevents'>
            <h1>Meetings Hosted By You</h1>
            <div className="ongoing">
                <h3>Ongoing</h3>
                <div className="wrapper">
                    {events.map((event, index) => (
                        event.status === 'ongoing' && (
                        <MyEventCard
                            key={index}
                            event={event}
                            editEvent={editEvent}
                            joinEvent={joinEvent}
                            endEvent={endEvent}
                            startEvent={startEvent}
                            deleteEvent={deleteEvent}
                        />
                        )
                    ))}
                </div>
            </div>
            <hr />
            <div className="upcoming">
                <h3>Upcoming</h3>
                <div className="wrapper">
                    {events.map((event, index) => (
                        event.status === 'upcoming' && (
                        <MyEventCard
                            key={index}
                            event={event}
                            editEvent={editEvent}
                            joinEvent={joinEvent}
                            endEvent={endEvent}
                            startEvent={startEvent}
                            deleteEvent={deleteEvent}
                        />
                        )
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MyEvents;