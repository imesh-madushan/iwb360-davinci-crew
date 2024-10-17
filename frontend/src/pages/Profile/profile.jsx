import React, { useState } from 'react';
import './profile.css';

function ProfileEdit() {
    const [profile, setProfile] = useState({
        firstName: "Arthur",
        lastName: "Nancy",
        email: "bradley.ortiz@gmail.com",
        phone: "477-046-1827",
        address: "116 Jaskolski Straveneue Suite 883",
        nation: "Colombia",
        gender: "Male",
        language: "English"
    });

    const [isFollowersOpen, setIsFollowersOpen] = useState(false);
    const [isFollowingsOpen, setIsFollowingsOpen] = useState(false);

    const followers = [
        { name: "John Doe" },
        { name: "Jane Smith" },
        { name: "Alice Johnson" }
    ];

    const followings = [
        { name: "Michael Brown" },
        { name: "Emily Davis" },
        { name: "Chris Wilson" }
    ];

    const handleClose = () => {
        setIsFollowersOpen(false);
        setIsFollowingsOpen(false);
    };

    return (
        <div className={`profile-edit ${isFollowersOpen || isFollowingsOpen ? 'profile-blur-background' : ''}`}>
            <div className="profile-top-info">
                <div className="profile-name">
                    {profile.firstName} {profile.lastName}
                </div>
                <div className="profile-follow-stats">
                    <div
                        className="profile-followers-box"
                        onClick={() => {
                            setIsFollowersOpen(!isFollowersOpen);
                            setIsFollowingsOpen(false); // Close followings dropdown when followers is clicked
                        }}
                    >
                        <p>Followers: <span>320</span></p>
                    </div>

                    <div
                        className="profile-followings-box"
                        onClick={() => {
                            setIsFollowingsOpen(!isFollowingsOpen);
                            setIsFollowersOpen(false); // Close followers dropdown when followings is clicked
                        }}
                    >
                        <p>Following: <span>150</span></p>
                    </div>
                </div>
            </div>

            <div className="profile-header">
                <h2>Edit Profile</h2>
                <button className="profile-save-btn">Save</button>
            </div>

            <form className="profile-form">
                <div className="profile-left-column">
                    <div className="profile-form-group">
                        <label>First Name</label>
                        <input type="text" value={profile.firstName} readOnly />
                    </div>
                    <div className="profile-form-group">
                        <label>Last Name</label>
                        <input type="text" value={profile.lastName} readOnly />
                    </div>
                    <div className="profile-form-group">
                        <label>Email</label>
                        <input type="email" value={profile.email} readOnly />
                    </div>
                    <div className="profile-form-group">
                        <label>Phone</label>
                        <input type="tel" value={profile.phone} readOnly />
                    </div>
                    <div className="profile-form-group">
                        <label>Address</label>
                        <input type="text" value={profile.address} readOnly />
                    </div>
                    <div className="profile-form-group">
                        <label>Nation</label>
                        <input type="text" value={profile.nation} readOnly />
                    </div>
                </div>

                <div className="profile-right-column">
                    <div className="profile-form-group">
                        <label>Gender</label>
                        <select value={profile.gender}>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="profile-form-group">
                        <label>Language</label>
                        <select value={profile.language}>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Other</option>
                        </select>
                    </div>
                </div>
            </form>


            
        </div>
    );
}

export default ProfileEdit;
