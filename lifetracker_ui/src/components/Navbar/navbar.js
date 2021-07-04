import { Link } from 'react-router-dom';
import "./navbar.css"
export default function Navbar() {
    return (
      <div className="navbar">
        <Link to="/">
          <img src='https://i.imgur.com/a4soxZX.png' alt='Mask Logo' className='logo'></img>
        </Link>
        <ul className='buttons item'>
        <Link to="/activity" className="btn yel">Activity</Link> 
        <Link to="/activity" className="btn yel">Loglines</Link> 
        <Link to="/activity" className="btn yel">Ideas</Link> 
        <Link to="/activity" className="btn yel">Progress</Link> 
        </ul>

        <ul className='buttons item'>
        <Link to="/login">
          <li><button className="btn">Login</button></li>
        </Link>
        <Link to="/register">
          <li><button className="btn">Register</button></li> 
        </Link>
        </ul>
      </div>
    )
  }