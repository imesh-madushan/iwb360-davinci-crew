import React from "react";
import './createEvent.css';
import { useState, useEffect } from "react";
import InvitePopup from "../../components/ui/invitePopup/invitePopup";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';

const CreateEvent = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [isInvitePopOpen, setIsInvitePopOpen] = useState(false);
    const [addedUsers, setAddedUsers] = useState([]);


    const handleAddInviters = () => {
        setIsInvitePopOpen(!isInvitePopOpen);
    }

    const handleCreate = () => {
        //TODO: Create Event API and Create success POPUP
        console.log("Create");
    }

    const handleCancel = () => {
        window.history.back();
    }

    return (
        <div className="createEvent">
            <h1>Create New Event</h1>
            <div className="info">
                <div className="col">
                    <label>Title</label>
                    <input type="text" placeholder="Title" />
                </div>
                <div className="row">
                    <div className="col">
                        <label>Start Time</label>
                        <input type="time" />
                    </div>
                    <div className="col">
                        <label>End Time</label>
                        <input type="time" />
                    </div>
                </div>
                
                <div className="col">
                    <label>Date</label>
                    <input type="date" />
                </div>
                <div className="col">
                    <label>Description</label>
                    <input type="text" placeholder="Description" />
                </div>
                <div className="col">
                    <label>Publicity</label>
                    <select name="" id="">
                        <option value="public" selected>Public</option>
                        <option value="private">Private</option>
                    </select>
                </div>
            </div>
            <div className="inviters">
                <div className="head">
                    <h3>Invite People to This Metting</h3>
                    <button onClick={handleAddInviters}>{addedUsers.length}<GroupAddRoundedIcon className="icon"/></button>
                </div>              
            </div>
            <div className="actions">
                <button className="create" onClick={handleCreate}>Create</button>
                <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
            
            {isInvitePopOpen ? (
                    <InvitePopup 
                        addedUsers={addedUsers}
                        setAddedUsers={setAddedUsers}
                        setIsInvitePopOpen={setIsInvitePopOpen}
                    />
                    ) : null
            }  
        </div>
    );
}

export default CreateEvent;