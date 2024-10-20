import React from "react";
import './login.css';
import { useState, useEffect } from 'react';
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
    const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

    const [formData, setFormData] = useState({
        Email: '',
        Password: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.Email === '' || formData.Password === '') {
            alert('Please fill all the fields');
            return;
        }

        fetch('http://localhost:9090/api/userSignIn', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                if (data.UserID !== null) {
                    alert("Login Successful!");
                    setIsAuthenticated(true);
                    window.location.href = '/';
                } else {
                    alert(data.message);
                }
            })
            .catch(err => {
                console.log(err)
                alert('An error occurred. Please try again later.');
            });

    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    return (
        <div className="login">
            <div className="login-wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Welcome Back!</h1>
                    <p>Please sign in to access your personalized dashboard</p>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required name="Email" onChange={handleChange} />
                        <PersonIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required name="Password" onChange={handleChange} />
                        <LockIcon className="icon" />
                    </div>

                    <div className="remember-box">
                        <label><input type="checkbox" />Remember me</label>
                        <a href="#">Forgot Password?</a>
                    </div>

                    <button type="submit">Login</button>

                    <div className="register-link">
                        <p>Don't have an account? <a href="/register">Register</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;