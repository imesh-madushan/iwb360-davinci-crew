import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Cookies from 'js-cookie';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Register from './pages/register/register';
import NavBarBeforeAuth from './components/navBarBeforeAuth/navBarBeforeAuth';
import NavBarAfterAuth from './components/navBarAfterAuth/navBarAfterAuth';
import SideBar from './components/sideBar/sideBar';
import CreateEvent from './pages/createEvent/createEvent';
import NotFound from './pages/notFound/notFound';
import './App.css';

function App() {
  const [authenticated, setAuthenticated] = useState(true);

  //validate the user is logged in
  useEffect(() => {
    if (Cookies.get('token')) {
      setAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {authenticated ? (
        <>
          <NavBarAfterAuth />
          <SideBar />
          <div className="mainbody">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/create" element={<CreateEvent />} />
              <Route path="/*" element={<NotFound />} />
            </Routes>
          </div>
        </>
      ) : (
        <>
          <NavBarBeforeAuth />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </>
      )}
    </Router>
  );
}

export default App;
