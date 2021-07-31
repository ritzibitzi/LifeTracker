import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import apiClient from "../../services/apiClient";

import "./navbar.css"
export default function Navbar({ user, setUser }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await apiClient.logout();
    setUser({});
    if (user?.email) {
      navigate("/login");
    }
  };

    return (
      <div className="navbar">
        <Link to="/">
          <img src='https://i.imgur.com/a4soxZX.png' alt='Mask Logo' className='logo'></img>
        </Link>
        <ul className='buttons item'>
        <Link to="/activity" className="btn yel">Activity</Link> 
        <Link to="/logline" className="btn yel">Loglines</Link> 
        <Link to="/activity" className="btn yel">Ideas</Link> 
        <Link to="/activity" className="btn yel">Progress</Link> 
        </ul>

        {!user.email ?
                <>
                    <ul className='buttons item'>
                      <Link to="/login">
                        <li><button className="btn">Login</button></li>
                      </Link>
                      <Link to="/register">
                        <li><button className="btn">Register</button></li> 
                      </Link>
                    </ul>
                </> : 
                    <Link onClick={handleLogout} to="/login">
                      <li><button className="btn">Logout</button></li>
                    </Link>
          }
      </div>
    )
  }