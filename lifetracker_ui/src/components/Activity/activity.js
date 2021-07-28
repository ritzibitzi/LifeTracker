import "./activity.css"
import { Link } from 'react-router-dom'

export default function Activity({ user }) {
    return (
        <div className="Activity">
            {!user.email ? 
            <div>Login <Link to="/login">here</Link> to view your profile page</div> :

            <div className="Activity-display">
                <div className="activity-topbar">
                    <h3 className="act-title">Activity Feed</h3>
                    <button className="new-activity"><Link to="/activity/logline">New Logline</Link></button>
                    <button className="new-activity">New Idea</button>
                    <button className="new-activity">New Progress</button>
                </div>
                <div className="activity-info">
                    <div className="activity-box">
                        <p>Loglines</p>
                        <p className="activity-detail">Total:</p>
                        <p className="activity-detail">Favorites:</p>
                    </div>
                    <div className="activity-box">Ideas</div>
                    <div className="activity-box">Progress</div>
                    
                </div>
                <h3>More Stats</h3>
                <div className="activity-footer">
                    <div className="new-activity ft">Average genre: </div>
                    <div className="new-activity ft">Number of ideas: </div>
                    <div className="new-activity ft">Last goal completed: </div>
                </div>
            </div>
        }
        </div>
    )
}