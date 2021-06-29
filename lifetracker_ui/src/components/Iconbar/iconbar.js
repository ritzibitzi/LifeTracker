import "./iconbar.css"
export default function Iconbar() {
    return (
      <div className="iconbar">
        <div className="singleIcon">
          <div className="name">Loglines</div>
          <div className="cont">
            <div className="img"><img src="https://i.imgur.com/XFpD9z8.png" alt="typewriter"></img></div>
            <div className="desc">A logline is a one-sentence summary or description of a story. Capture the essence of your story here, and never lose sight of it again!</div>
          </div>
        </div>
        <div className="singleIcon">
          <div className="name">Ideas</div>
          <div className="cont">
            <div className="img"><img src="https://i.imgur.com/LzQhL3x.png" alt="typewriter"></img></div>
            <div className="desc">Whether you've got a big idea or a useful concept, log your ideas for that project here!</div>
          </div>
        </div>
        <div className="singleIcon">
          <div className="name">Progress</div>
          <div className="cont">
            <div className="img"><img src="https://i.imgur.com/cNcFklt.png" alt="typewriter"></img></div>
            <div className="desc">Journal your creative process here, and make note of your milestones and goals as they come to you!</div>
          </div>
        </div>
      </div>
    )
  }