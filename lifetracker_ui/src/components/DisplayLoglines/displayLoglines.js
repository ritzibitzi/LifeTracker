import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from "react"
import apiClient from "../../services/apiClient"

import "./displayLoglines.css"

export default function Logline({ user }) {
    const [logForm, setLogForm] = useState({
        title: "",
        protagonist: "",
        incident: "",
        goal: "",
        conflict: "",
    })
    const [loglines, setLoglines] = useState([]);

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
    
    useEffect(() => {
        const fetchLoglines = async () => {
          const { data, error } = await apiClient.listLoglines(user);
          if (data) {
            console.log(
              data.getAllloglines
            );
            setLoglines(data.getAllloglines);
          }
          if (error) {
            alert(error);
          }
        };
        fetchLoglines();
      }, [user]);

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
                    <div className="overview">
                        <h3 className="addLog">Overview</h3>
                        <Link to="/activity/logline"><button className="new-activity yel">New Logline</button></Link>
                    </div>
                    <div className="logLines">
                        {loglines.length > 0
                        ? loglines.map((element) => (
                            <div className="mod-box">
                            Logline: {element.protagonist} {element.incident} {element.goal} {element.conflict}<br></br><br></br>Project: {element.title} 
                            </div>
                        ))
                        : null}
                    </div>
                </div>
            </div>
            }
        </div>
    )
}