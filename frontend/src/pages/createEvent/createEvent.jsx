import React from "react";
import './createEvent.css';
import userImg from '../../assests/user.png';
import { useState, useEffect } from "react";
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';

const UserItems = ({user, addUser, removeUser, isAdded}) => {

    const triggerAdd = () => {
        addUser(user);
    }
    
    const triggerDrop = () => {
        removeUser(user);
    }

    return (
        <div className="userItem">
            <div className="u-info">
                <img src={user.img} alt="" />
                <p>{user.name}</p>
            </div>
            {isAdded ? (
                <RemoveRoundedIcon className="icon" onClick={triggerDrop}/>
            ) : (
                <AddRoundedIcon className="icon" onClick={triggerAdd}/>
            )}
        </div>
    );
}

const CreateEvent = () => {
    const [isPrivate, setIsPrivate] = useState(false);
    const [dropInviters, setDropInviters] = useState(false);
    const [userList, setUserList] = useState([
        {
            id: 1,
            name: "John asasd1",
            img: userImg
        },
        {
            id: 2,
            name: "Jane 2ld",
            img: userImg
        },
        {
            id: 3,
            name: "John 39q8whiwhdhqu",
            img: userImg
        }
    ]);

    const [addedUsers, setAddedUsers] = useState([]);

    const handleAddInviters = () => {
        setDropInviters(!dropInviters);
    }

    const checkIsAdded = (user) => {
        return addedUsers.some(addedUser => addedUser.id === user.id);
    }

    const addUser = (user) => {
        setAddedUsers([...addedUsers, user]);
    }

    const removeUser = (user) => {
        setAddedUsers(addedUsers.filter(addedUser => addedUser.id !== user.id));
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

                {dropInviters ? (
                    <div className="add-users">
                        <div className="add-dropDown">
                            <div className="search">
                                <SearchRoundedIcon className="icon"/>
                                <hr />
                                <input type="text" placeholder="Search..." />
                            </div>
                            <div className="people">
                                {userList.map((user, index) => (
                                    <UserItems 
                                        key={index}
                                        user={user}
                                        addUser={addUser}
                                        removeUser={removeUser}
                                        isAdded={checkIsAdded(user)}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className="added-list">
                            <div className="head">
                                <h3>Added</h3>
                                <GroupsRoundedIcon className="icon"/>
                            </div>
                            {addedUsers.length > 0 && 
                                <div className="people">
                                {addedUsers.map((user, index) => (
                                    <UserItems 
                                        key={index}
                                        user={user}
                                        addUser={addUser}
                                        removeUser={removeUser}
                                        isAdded={checkIsAdded(user)}
                                    />
                                ))}
                                </div>
                            }
                        </div>
                    </div>
                   
                    ) : null
                }    
                
            </div>
            <div className="actions">
                <button className="create" onClick={handleCreate}>Create</button>
                <button className="cancel" onClick={handleCancel}>Cancel</button>
            </div>
        </div>
    );
}

export default CreateEvent;