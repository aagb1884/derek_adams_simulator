import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./startScreen.css";

function StartScreen() {
  return (
    <div className="startScreen-container">
      <div className="startScreen-cover">
        <div className="startScreen-image"></div>
        <div className="startScreen-image"></div>
        <div className="startScreen-image"></div>
      </div>
      <h1 className="startScreen-title">You are Derek Adams</h1>
      <h2 className="startScreen-subtitle">A management simulator.</h2>
      <p>"Five minutes of Jim Duffy's life he'll never get back." -  <a href="https://planetradio.co.uk/clyde/shows/clyde-1-superscoreboard/" className="superScoreboard">Gordon Duncan, Superscoreboard</a></p>
      <div className="startScreen-menu">
        <Link className="startScreen-btn" to="/game">
          Start
        </Link>
        <Link className="startScreen-btn" to="/about">
          About
        </Link>
        <Link className="startScreen-btn" to="/credits">
          Credits
        </Link>
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
