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
        language: "English",
        dob: { month: "September", day: "31", year: "1990" },
        google: "Zachary Ruiz",
        slogan: "Land Acquisition Specialist",
        paymentMethods: [
            { type: "Visa", lastFour: "8314", expiry: "06/21" },
            { type: "MasterCard", lastFour: "8314", expiry: "07/19" }
        ]
    });

    const [isFollowersOpen, setIsFollowersOpen] = useState(false);
    const [isFollowingsOpen, setIsFollowingsOpen] = useState(false);

    const followers = [
        { name: "John Doe"},
        { name: "Jane Smith"},
        { name: "Alice Johnson"}
    ];

    const followings = [
        { name: "Michael Brown"},
        { name: "Emily Davis"},
        { name: "Chris Wilson"}
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
                        onClick={() => setIsFollowersOpen(true)}
                    >
                        <p>Followers: <span>320</span></p>
                    </div>
                    <div
                        className="profile-followings-box"
                        onClick={() => setIsFollowingsOpen(true)}
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
                        <select value={profile.gender} readOnly>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="profile-form-group">
                        <label>Language</label>
                        <select value={profile.language} readOnly>
                            <option>English</option>
                            <option>Spanish</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div className="profile-form-group">
                        <label>Date of Birth</label>
                        <div className="profile-dob-select">
                            <select value={profile.dob.month} readOnly>
                                <option>September</option>
                            </select>
                            <select value={profile.dob.day} readOnly>
                                <option>31</option>
                            </select>
                            <select value={profile.dob.year} readOnly>
                                <option>1990</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>

            {isFollowersOpen && (
    <div className="profile-modal">
        <div className="profile-modal-content">
            <div className="profile-modal-header">
                <h3>Followers</h3>
                <button className="profile-close-btn" onClick={handleClose}>X</button>
            </div>
            <ul>
                {followers.map((follower, index) => (
                    <li key={index}>
                        <span>{follower.name}</span>
                        <button className="profile-view-btn">View</button>
                        <button className="profile-remove-btn">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)}


            {/* Followings Modal */}
            {isFollowingsOpen && (
    <div className="profile-modal">
        <div className="profile-modal-content">
            <div className="profile-modal-header">
                <h3>Followings</h3>
                <button className="profile-close-btn" onClick={handleClose}>X</button>
            </div>
            <ul>
                {followings.map((following, index) => (
                    <li key={index}>
                        <span>{following.name}</span>
                        <button className="profile-view-btn">View</button>
                        <button className="profile-remove-btn">Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    </div>
)}

        </div>
    );
}

export default ProfileEdit;