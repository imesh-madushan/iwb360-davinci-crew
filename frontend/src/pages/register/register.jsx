import React from "react";
import { useState, useEffect, createContext } from 'react';
import axios from 'axios';
import './register.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Register = () => {
    const [formData, setFormData] = useState({
        Name: '',
        Email: '',
        Password: '',
        ConfirmPassword: '',
        Gender: ''
    });

    const regData = {
        Name: formData.Name,
        Email: formData.Email,
        Password: formData.Password,
        Gender: formData.Gender
    }

    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value});
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.Password !== formData.ConfirmPassword) {
            alert('Passwords do not match');
            return;
        }

        fetch('http://localhost:9090/api/userSignUp', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(regData)
        })
        .then(response => response.json())
        .then(data => {
            if (data.UserID !== null) {
                alert("Registration Successful! Please login to continue.");
                window.location.href = '/login';
            } else {
                alert(data.message);
            }
        })
        .catch(err => console.log(err));
}


    return (
        <div className="register">
            <div className="register-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Hello there,</h1>
                    <p>Enter your Personal details and start collaborating today!</p>
                    <div className="input-box">
                        <input type="text" placeholder="Name" required name="Name" onChange={handleChange}/>
                        <PersonIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required name="Email" onChange={handleChange}/>
                        <AlternateEmailIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required name="Password" onChange={handleChange}/>
                        <LockOpenIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required name="ConfirmPassword" onChange={handleChange}/>
                        <LockIcon className="icon" />
                    </div>
                    <div className="selection-box">
                        <select required name="Gender" onChange={handleChange}>
                            <option value="" disabled selected hidden>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                        <ArrowDropDownIcon className="icon" />
                    </div>

                    <div className="remember-box">
                        <label><input type="checkbox"/>Remember me for the next 30 days</label>
                    </div>

                    <button type="submit">Sign up</button>

                    <div className="login-link">
                        <p>Already have an account? <a href="/login">Sign In</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;