import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"

import "./logline.css"

export default function Logline({ user }) {
    const [logForm, setLogForm] = useState({
        title: "",
        protagonist: "",
        incident: "",
        goal: "",
        conflict: "",
    })

    const handleOnInputChange = (event) => {
        setLogForm((f) => ({ ...f, [event.target.name]: event.target.value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log("HANDLE")
        console.log(logForm)
        const {data, error} = await apiClient.createLogline({logForm})

        if (data) {
            console.log("Success")
        }
    }

    return (
        <div className="Logline">
            {!user.email ? 
            <div>Login <Link to="/login">here</Link> to view your profile page</div> :

            //CHECK USER SAVED LOGLINES, IF NONE, DISPLAY "Nothing here yet.."
            <div className="Logline-display">
                <div className="activity-topbar">
                    <h3 className="act-title">Loglines</h3>
                </div>
                <div className="logInfo">
                    <h3 className="addLog">Add a logline</h3>
                    <div className="logForm">
                        <div className="input-field">
                            <input
                                type="title"
                                name="title"
                                placeholder="Title"
                                value={logForm.title}
                                onChange={handleOnInputChange}
                                className = "bar"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="protagonist"
                                name="protagonist"
                                placeholder="Protagonist"
                                value={logForm.protagonist}
                                onChange={handleOnInputChange}
                                className = "bar"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="incident"
                                name="incident"
                                placeholder="Incident"
                                value={logForm.incident}
                                onChange={handleOnInputChange}
                                className = "bar"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="goal"
                                name="goal"
                                placeholder="Goal"
                                value={logForm.goal}
                                onChange={handleOnInputChange}
                                className = "bar"
                            />
                        </div>
                        <div className="input-field">
                            <input
                                type="conflict"
                                name="conflict"
                                placeholder="Conflict"
                                value={logForm.conflict}
                                onChange={handleOnInputChange}
                                className = "bar"
                            />
                        </div>
                        <button className="btn" onClick={handleSubmit}>Save</button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}