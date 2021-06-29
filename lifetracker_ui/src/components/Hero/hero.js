import "./hero.css"
export default function Hero() {
    return (
      <div className="hero">
        <div className="col">
          <div className="title">artTracker</div>
          <div className="desce">
            <p>One simple place to track and aid your creative process!</p>
            <br></br>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
    Fusce luctus enim ac neque convallis congue. Vestibulum eu est quis libero iaculis facilisis.</p>
          </div>
        </div>
        <div className="col">
          <img src="https://i.imgur.com/mYcqWX4.png" className="imag" alt="logo"></img>
        </div>
      </div>
    )
  }