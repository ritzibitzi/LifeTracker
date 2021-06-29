import "./navbar.css"
export default function Navbar() {
    return (
      <div className="navbar">
        <img src='https://i.imgur.com/a4soxZX.png' alt='Mask Logo' width='108' height='108' className='logo'></img>
        <ul className='buttons item'>
        <li><button className="btn yel">Activity</button></li>
        <li><button className="btn yel">Loglines</button></li>
        <li><button className="btn yel">Ideas</button></li>
        <li><button className="btn yel">Progress</button></li>
        </ul>

        <ul className='buttons item'>
          <li><button className="btn">Login</button></li>
          <li><button className="btn">Register</button></li> 
        </ul>
      </div>
    )
  }