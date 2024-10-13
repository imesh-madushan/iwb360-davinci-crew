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

    return (
        <div className="profile-edit">
            
          <div className="profile-top-info">
          <div className="profile-name">
              {profile.firstName} {profile.lastName}
          </div>
          <div className="profile-follow-stats">
            <a href="/followers" className="profile-followers-box">
                <p>Followers: <span>320</span></p>
            </a>
            <a href="/following" className="profile-followings-box">
            <p>Following: <span>150</span></p>
        </a>
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
                        <input type="text" value={profile.firstName} />
                    </div>
                    <div className="profile-form-group">
                        <label>Last Name</label>
                        <input type="text" value={profile.lastName} />
                    </div>
                    <div className="profile-form-group">
                        <label>Email</label>
                        <input type="email" value={profile.email} />
                    </div>
                    <div className="profile-form-group">
                        <label>Phone</label>
                        <input type="tel" value={profile.phone} />
                    </div>
                    <div className="profile-form-group">
                        <label>Address</label>
                        <input type="text" value={profile.address} />
                    </div>
                    <div className="profile-form-group">
                        <label>Nation</label>
                        <input type="text" value={profile.nation} />
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
                    <div className="profile-form-group">
                        <label>Date of Birth</label>
                        <div className="profile-dob-select">
                            <select value={profile.dob.month}>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>
                            </select>
                            <select value={profile.dob.day}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                <option>6</option>
                                <option>7</option>
                                <option>8</option>
                                <option>9</option>
                                <option>10</option>
                                <option>11</option>
                                <option>12</option>
                                <option>13</option>
                                <option>14</option>
                                <option>15</option>
                                <option>16</option>
                                <option>17</option>
                                <option>18</option>
                                <option>19</option>
                                <option>20</option>
                                <option>21</option>
                                <option>22</option>
                                <option>23</option>
                                <option>24</option>
                                <option>25</option>
                                <option>26</option>
                                <option>27</option>
                                <option>28</option>
                                <option>29</option>
                                <option>30</option>
                                <option>31</option>
                            </select>
                            <select value={profile.dob.year}>
                                <option>2024</option>
                                <option>2023</option>
                                <option>2022</option>
                                <option>2021</option>
                                <option>2020</option>
                                <option>2019</option>
                                <option>2018</option>
                                <option>2017</option>
                                <option>2016</option>
                                <option>2015</option>
                                <option>2014</option>
                                <option>2013</option>
                                <option>2012</option>
                                <option>2011</option>
                                <option>2010</option>
                                <option>2009</option>
                                <option>2008</option>
                                <option>2007</option>
                                <option>2006</option>
                                <option>2005</option>
                                <option>2004</option>
                                <option>2003</option>
                                <option>2002</option>
                                <option>2001</option>
                                <option>2000</option>
                                <option>1999</option>
                                <option>1998</option>
                                <option>1997</option>
                                <option>1996</option>
                                <option>1995</option>
                                <option>1994</option>
                                <option>1993</option>
                                <option>1992</option>
                                <option>1991</option>
                            </select>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default ProfileEdit;
