import React from "react";
import { useEffect, useState, useRef } from "react";
import InvitePopup from "../invitePopup/invitePopup";
import './myeventCard.css';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import BorderColorRoundedIcon from '@mui/icons-material/BorderColorRounded';
import TimerRoundedIcon from '@mui/icons-material/TimerRounded';
import AccessTimeFilledRoundedIcon from '@mui/icons-material/AccessTimeFilledRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import PublicRoundedIcon from '@mui/icons-material/PublicRounded';
import VpnLockRoundedIcon from '@mui/icons-material/VpnLockRounded';
import ShareIcon from '@mui/icons-material/Share';

const MyEventCard = ({event, editEvent, joinEvent, endEvent, startEvent, deleteEvent}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [currentDate, setCurrentDate] = useState(new Date().toISOString().split('T')[0]);
    const [currentTime, setCurrentTime] = useState(new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5));
    const [isSharingOpen, setIsSharingOpen] = useState(false);
    const [isInvitePopOpen, setIsInvitePopOpen] = useState(false);
    const shareRef = useRef(null);
    const [addedUsers, setAddedUsers] = useState([]);

    //state to store input values
    const [inputValues, setInputValues] = useState({
        name: event.name,
        type: event.type,
        date: event.date,
        start: event.start,
        end: event.end,
        desc: event.desc,
    });

    const editClick = () => {
        setIsEditing(!isEditing);
    }

    const shareClick = () => {
        setIsSharingOpen(!isSharingOpen);
    }

    const handleNameChange = (e) => {
        setInputValues({...inputValues, name: e.target.value});

        if(e.target.value === '') {
            e.target.classList.toggle('error', true);
        }   
        else {
            e.target.classList.toggle('error', false);
        }
    }

    const handleStartTimeChange = (e) => {
        setInputValues({...inputValues, start: e.target.value});

        if(inputValues.date === currentDate && e.target.value < currentTime) {  
            e.target.classList.toggle('error', true);
        }
        else {
            e.target.classList.toggle('error', false);
        }
    }

    const handleEndTimeChange = (e) => {
        setInputValues({...inputValues, end: e.target.value});

        if((inputValues.date === currentDate && e.target.value < currentTime) || e.target.value < inputValues.start) {  
            e.target.classList.toggle('error', true);
        }
        else {
            e.target.classList.toggle('error', false);
        }
    }

    const handleDescChange = (e) => {
        setInputValues({...inputValues, desc: e.target.value});

        if(e.target.value === '') {
            e.target.classList.toggle('error', true);
        }
        else {
            e.target.classList.toggle('error', false);
        }
    }

    //update event data in addedUsers and database
    const updateData = () => {
        if(
            inputValues.name === '' || 
            inputValues.type === '' ||
            inputValues.date === '' ||
            inputValues.start === '' ||
            inputValues.end === '' ||
            inputValues.desc === ''
            ) {
            alert('Please fill all the fields');
            return;
        }

        else if(inputValues.date < currentDate) {
            alert('Date should be greater than or equal to current date');
            return;
        }

        else if(inputValues.start >= inputValues.end) {
            alert('End time should be greater than start time');
            return;
        }

        else if(inputValues.date === currentDate && inputValues.start < currentTime) {
            alert('Start time should be greater than current time');
            return;
        }

        else if(
            inputValues.name === event.name &&
            inputValues.type === event.type &&
            inputValues.date === event.date &&
            inputValues.start === event.start &&
            inputValues.end === event.end &&
            inputValues.desc === event.desc
            ) {
            setIsEditing(false);
            return;
        }

        event.name = inputValues.name;
        event.type = inputValues.type;
        event.date = inputValues.date;
        event.start = inputValues.start;
        event.end = inputValues.end;
        event.desc = inputValues.desc;

        editEvent(event);
        setIsEditing(false);
    }

    //reset edit values
    const resetEdit = () => {
        setInputValues({
            name: event.name,
            type: event.type,
            date: event.date,
            start: event.start,
            end: event.end,
            desc: event.desc,
        });

    }

    //use effect to close sharing options when clicked outside
    useEffect(() => {
        const handleClickOutSide = (e) => {
            if(shareRef.current && !shareRef.current.contains(e.target)) {
                setIsSharingOpen(false);
            }
        }

        if(isSharingOpen) {
            document.addEventListener('click', handleClickOutSide);
        }
        else {
            document.removeEventListener('click', handleClickOutSide);
        }

        return () => {
            document.removeEventListener('click', handleClickOutSide);
        }

    }, [isSharingOpen]);

    //use effect to update current date and time every minute
    useEffect(() => {
        const timer = setInterval(() => {
            const now = new Date();
            setCurrentDate(new Date().toISOString().split('T')[0]);
            setCurrentTime(new Date().toLocaleTimeString('en-US', { hour12: false }).slice(0, 5));
        }, 60000);

        return () => clearInterval(timer);
    }, []);


    return (
        <div className={`myevent-card ${event.status === 'ongoing' ? 'on' : ''}`}>
            
            <h4>
                {!isEditing ? (event.name) : (
                    <input 
                    type="text" 
                    value={inputValues.name} 
                    onChange={handleNameChange}/>
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
                        <select 
                        id="" 
                        value={inputValues.type} 
                        onChange={(e) => setInputValues({...inputValues, type: e.target.value})}>
                            <option value="public" >Public</option>
                            <option value="private">Private</option>
                        </select>
                    </>
                )}
            </div>
            
            <div className="date-enroll">
                <p><GroupsRoundedIcon className="icon"/>Enrolled: {event.enrolled}</p>
                <p><CalendarMonthRoundedIcon className="icon"/>
                    {!isEditing ? (event.date) : (
                        <input 
                        type="date" 
                        min={currentDate} 
                        value={inputValues.date} 
                        onChange={(e) => setInputValues({...inputValues, date: e.target.value})}/>
                    )}
                </p>
            </div>
            
            <div className="times">
                <p><TimerRoundedIcon className="icon"/>Start: 
                    {!isEditing ? (event.start) : (
                        <input 
                        type="time" 
                        value={inputValues.start} 
                        onChange={handleStartTimeChange}/>
                    )
                }</p>
                <p><AccessTimeFilledRoundedIcon className="icon"/>End: 
                    {!isEditing ? (event.end) : (
                        <input 
                        type="time" 
                        min={currentTime} 
                        value={inputValues.end} 
                        onChange={handleEndTimeChange}/>
                    )}
                </p>
            </div>
            
            {event.status === 'upcoming' && 
                <BorderColorRoundedIcon className="icon" onClick={editClick}/>
            }

            <div className="share">
                <ShareIcon className="icon" onClick={shareClick} ref={shareRef}/>
                {isSharingOpen && (
                    <div className="options">
                        <button>Copy Link</button>
                        <button onClick={setIsInvitePopOpen}>Invite</button>
                    </div>
                )}
            </div>
            
            <div className="desc">
                {!isEditing ? (<p>{event.desc}</p>) : (
                    <textarea 
                    value={inputValues.desc} 
                    onChange={handleDescChange}/>
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
                            <>
                                <button onClick={updateData}>Save</button>
                                <button onClick={resetEdit}>Reset</button>
                            </>
                            ) : (
                            <>
                                <button onClick={() => startEvent(event)}>Start</button>
                                <button onClick={() => deleteEvent(event)}>Delete</button>
                            </>
                        )}
                    </>
                )}
            </div>

            {isInvitePopOpen && (
                <InvitePopup 
                    addedUsers={addedUsers}
                    setAddedUsers={setAddedUsers}
                    setIsInvitePopOpen={setIsInvitePopOpen}
                />
            )}
        </div>
    );
};


export default MyEventCard;