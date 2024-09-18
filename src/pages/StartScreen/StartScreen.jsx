import { Link } from "react-router-dom";
import { useState } from "react";
import Footer from "../../components/Footer/Footer";
import Modal from "../../components/Modal/modal";
import "./startScreen.css";

function StartScreen() {
  const [modalOpen, setModalOpen] = useState(true)

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
        {modalOpen && (
          <Modal
          setModalOpen={setModalOpen} />
        )}
      </div>
      <Footer />
    </div>
  );
}

export default StartScreen;
