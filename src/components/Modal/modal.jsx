import { useNavigate } from "react-router-dom";
import './modal.css'
function Modal ({setModalOpen}) {

    const navigate = useNavigate();

    return (
        <div
        className="modal-wrapper"
        onClick={() => navigate('/')}
      >
        <div
          className="modal"
          onClick={e => e.stopPropagation()}
        >
        <section className="text">
            <p>I am now hosting this game - and planning on building others - at</p> 
            <p>
                <a href="https://scottish-football-simulators.co.uk/">www.scottish-football-simulators.co.uk</a>
            </p>
            <p>This site is no longer being updated.</p>
        </section>
        <button className="modalExit-btn" onClick={() => setModalOpen(false)}>
            Click to Continue on this Site
        </button>
        </div>
        
        </div>
    )
};

export default Modal;