import React from "react";
import './login.css';
/*import loginCoverImage from '../../assests/loginCover.jpeg';*/
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
import PersonIcon from '@mui/icons-material/Person';
import LockIcon from '@mui/icons-material/Lock';


const Login = () => {
    const { isAuthenticated } = useContext(AuthContext);
    return (
        <div className="login">
            <div className="login-wrapper">
                <form action="">
                    <h1>Welcome Back!</h1>
                    <p>Please sign in to access your personalized dashboard</p>
                    <div className="input-box">
                        <input type="text" placeholder="Username" required />
                        <PersonIcon className="icon" />
                    </div>
                    <div className="input-box">
                        <input type="password" placeholder="Password" required />
                        <LockIcon className="icon" />
                    </div>

                    <div className="remember-box">
                        <label><input type="checkbox"/>Remember me</label>
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