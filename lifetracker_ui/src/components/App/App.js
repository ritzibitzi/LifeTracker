import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios";

import Navbar from '../Navbar/navbar';
import Activity from '../Activity/activity';
import Landing from '../Landing/landing';
import Register from '../Register/register';
import Login from '../Login/login';
import './App.css';
import apiClient from "../../services/apiClient";

export default function App() {
  const [appState, setAppState] = useState({})
  const [user, setUser] = useState({})

  //Allows user to remain logged in
  useEffect(() => {
    const token = localStorage.getItem("art_token");
    const fetchUser = async() => {
      const { data, error } = await apiClient.getUser();
      if (data) {
        setUser(data.user);
      }

      if (error) {
        console.log(`${error} App.js`)
      }
    };

    const tokenValid = async() => {
      if (token) {
        apiClient.setToken(token);
        await fetchUser();
      }
    };
    tokenValid();
  }, []);


  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={user} setUser={setUser} />
        <Routes>
          <Route path="/" element={<Landing />}/>
          <Route path="/login" element={<Login user={user} setUser={setUser} />} />
          <Route path="/register" element={<Register user={user} setUser={setUser} />} />
          <Route
            path="/activity"
            element={<Activity setAppState={setAppState} appState={appState} user={appState?.user} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  )
}
