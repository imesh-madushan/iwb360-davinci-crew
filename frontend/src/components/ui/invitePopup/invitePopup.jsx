import React from "react";
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import userImg from '../../../assests/user.png';
import './invitePopup.css';
import GroupsRoundedIcon from '@mui/icons-material/GroupsRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DoneRoundedIcon from '@mui/icons-material/DoneRounded';
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

const InvitePopup = ({addedUsers, setAddedUsers, setIsInvitePopOpen}) => {
    const [userList, setUserList] = useState([
        {
            id: 1,
            username: "John_asasd1",
            name: "John asasd1",
            img: userImg
        },
        {
            id: 2,
            username: "Jane_2ld",
            name: "Jane 2ld",
            img: userImg
        },
        {
            id: 3,
            username: "John_3ld",
            name: "John 39q8whiwhdhqu",
            img: userImg
        }
    ]);


    const checkIsAdded = (user) => {
        return addedUsers.some(addedUser => addedUser.id === user.id);
    }

    const addUser = (user) => {
        setAddedUsers([...addedUsers, user]);
    }

    const removeUser = (user) => {
        setAddedUsers(addedUsers.filter(addedUser => addedUser.id !== user.id));
    }

    const closePopup = () => {
        setIsInvitePopOpen(false);
    }

    return ReactDOM.createPortal(
        <div className="backdrop">
            <div className="add-users">
                <div className="user-list">
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
                        <h3>{addedUsers.length} Added</h3>
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
                <button className="done" onClick={closePopup}>
                    <DoneRoundedIcon className="icon"/>
                    <p>Done</p>
                </button>
            </div>
        </div>,
        document.querySelector('.mainbodyAuth')
    )
}

export default InvitePopup;