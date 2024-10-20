import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState, useContext } from 'react';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import NavBarBeforeAuth from './components/navBarBeforeAuth/navBarBeforeAuth';
import NavBarAfterAuth from './components/navBarAfterAuth/navBarAfterAuth';
import SideBar from './components/sideBar/sideBar';
import CreateEvent from './pages/createEvent/createEvent';
import Profile from './pages/Profile/profile';
import MyEvents from './pages/myEvents/myEvents';
import NotFound from './pages/notFound/notFound';
import { AuthContext } from './context/authContext';
import ProtectedRoutes from './utils/ProtectedRoutes';
import './App.css';

function App() {
  const { isAuthenticated } = useContext(AuthContext);

  return (
    <Router>
      {isAuthenticated ? (
        <>
          <NavBarAfterAuth />
          <SideBar />
        </>
      ) : (
        <>
          <NavBarBeforeAuth />
        </>
      )}

      <div className={isAuthenticated ? "mainbodyAuth" : "mainbodyNoAuth"}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoutes />}>
            <Route path="/create" element={<CreateEvent />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/myevents" element={<MyEvents />} />
          </Route>
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>

    </Router>
  );
}

export default App;
