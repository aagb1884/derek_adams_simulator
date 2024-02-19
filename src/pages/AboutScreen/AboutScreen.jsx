import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import "./aboutScreen.css";

function AboutScreen() {
  return (
    <div className="aboutScreen-container">
      <h1 className="aboutScreen-title">Derek Adams Simulator</h1>
      <h2>Reasonably Interactive Text-Adventure Game</h2>
        <div className="aboutScreen-linksContainer">
        <Link className="aboutScreen-link" to="/">
          {">"} Start Screen
        </Link>
        <Link className="aboutScreen-link" to="/description">
          {">"} Description
        </Link>
        
      </div>
      <a
        className="aboutScreen-personalLink"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Andrew Blair
      </a>
      <Footer />
    </div>
  );
}

export default AboutScreen;
