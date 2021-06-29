import "./landing.css"
import Hero from '../Hero/hero';
import Iconbar from '../Iconbar/iconbar';

export default function Landing() {
    return (
      <div className="landing">
        <Hero />
        <Iconbar />
      </div>
    )
  }