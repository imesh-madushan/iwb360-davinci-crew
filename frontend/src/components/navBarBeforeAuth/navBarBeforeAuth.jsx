import React from "react";
import BusinessLogo from '../../assests/logo-color2.png';
import './navBarBeforeAuth.css';

const NavBarBeforeAuth = () => {
    return (
        <>
            <header className="navBAuth">
                <div className="logo">
                    <a href="/"><img src={BusinessLogo} alt=""/></a>
                </div>
                <div className="links">
                    <a href="/login">Login</a>
                    <a href="/register">Register</a>
                </div>
            </header>
        </>
    );
}

export default NavBarBeforeAuth;