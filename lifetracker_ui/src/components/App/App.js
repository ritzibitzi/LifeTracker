import { useState } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import axios from "axios";

import Navbar from '../Navbar/navbar';
import Activity from '../Activity/activity';
import Landing from '../Landing/landing';
import Register from '../Register/register';
import Login from '../Login/login';
import './App.css';

export default function App() {
  const [appState, setAppState] = useState({})
  const [user, setUser] = useState({})

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar user={appState.user} />
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
