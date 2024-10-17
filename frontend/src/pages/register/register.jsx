import React from "react";
import './register.css';
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const Register = () => {
    return (
        <div className="register">
            <div className="register-wrapper">
                <form action="">
                    <h1>Hello there,</h1>
                    <p>Enter your Personal details and start collaborating today!</p>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <PersonIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="email" placeholder="Email" required />
                        <AlternateEmailIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <LockOpenIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Confirm Password" required />
                        <LockIcon className="icon" />
                    </div>
                    <div className="selection-box">
                        <select required>
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