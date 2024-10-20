import React from "react";
import { useState, useEffect, createContext } from 'react';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    //validate the user is logged in
    useEffect(() => {
        if (Cookies.get('token')) {
            setIsAuthenticated(true);
        }
    }, []);

    return (
        <AuthContext.Provider value={{isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
}
