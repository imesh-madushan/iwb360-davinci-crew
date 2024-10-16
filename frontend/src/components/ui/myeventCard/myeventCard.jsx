import React from "react";
import { useEffect, useState } from "react";
import './myeventCard.css';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import VpnLockRoundedIcon from '@mui/icons-material/VpnLockRounded';

const MyEventCard = ({event, editEvent, joinEvent, endEvent, startEvent, deleteEvent}) => {
    const [isEditing, setIsEditing] = useState(false);

    const editClick = () => {
        setIsEditing(!isEditing);
    }

    return (
        <div className={`myevent-card ${event.status === 'ongoing' ? 'on' : ''}`}>
            
            <h4>
                {!isEditing ? (event.name) : (
                    <input type="text" value={event.name} />
                )}
            </h4>
            
            <div className="publicity"> 
                {!isEditing ? (
                    <>
                        {event.type === 'public' && (
                            <p><PublicRoundedIcon className="icon"/>Public</p>
                        )}
                        {event.type === 'private' && (
                            <p><VpnLockRoundedIcon className="icon"/>Private</p>
                        )}
                    </>
                ) : (
                    <>
                        <p><PublicRoundedIcon className="icon"/> Publicity:</p>
                        <select name="" id="">
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </>
                )}
            </div>
            
            <div className="date-enroll">
                <p><GroupsRoundedIcon className="icon"/>Enrolled: {event.enrolled}</p>
                <p><CalendarMonthRoundedIcon className="icon"/>
                    {!isEditing ? (event.date) : (
                        <input type="date" value={event.date} />
                    )}
                </p>
            </div>
            
            <div className="times">
                <p><TimerRoundedIcon className="icon"/>Start: 
                    {!isEditing ? (event.start) : (
                        <input type="time" value={event.start} />
                    )
                }</p>
                <p><AccessTimeFilledRoundedIcon className="icon"/>End: 
                    {!isEditing ? (event.end) : (
                        <input type="time" value={event.end} />
                    )}
                </p>
            </div>
            
            {event.status === 'upcoming' && 
                <BorderColorRoundedIcon className="icon" onClick={editClick}/>
            }
            
            <div className="desc">
                {!isEditing ? (<p>{event.desc}</p>) : (
                    <textarea value={event.desc} />
                )}
            </div>

            <div className="actions">
                {event.status === 'ongoing' && (
                    <>
                        <button onClick={() => joinEvent(event)}>Join</button>
                        <button onClick={() => endEvent(event)}>End</button>
                    </>

                )}
                {event.status === 'upcoming' && (
                    <>
                        {isEditing ? (
                            <button onClick={editClick}>Save</button>
                            ) : (
                            <button onClick={() => startEvent(event)}>Start</button>
                        )}
                        <button onClick={() => deleteEvent(event)}>Delete</button>
                    </>
                )}
            </div>
        </div>
    );
};


export default MyEventCard;