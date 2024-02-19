import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./mainComponent.css";

function MainComponent({
  text,
  btnLeft,
  btnRight,
  setOption,
  idLeft,
  idRight,
  image,
  alt,
  
}) {
  const [menuToggle, setMenuToggle] = useState(false);

  const handleMenuToggle = () => {
    setMenuToggle(!menuToggle);
  };

  return (
    <div className="mainComponent-container">
      <h1>You are Derek Adams</h1>
      {menuToggle && <Header />}
      <div className="mainComponent-imageAndText">
        <label className="mainComponent-menuBtn">
          <input
            type="checkbox"
            checked={menuToggle}
            onChange={handleMenuToggle}
          />
        </label>
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">{text}</p>
        {alt === "Humanoid robo-rabbit" && (
          <a id="portal" href="https://the-final-piece.vercel.app/"></a>
        )}
      </div>
      <div className="mainComponent-options">
        <div className="mainComponent-buttons">
          <button
            onClick={() => setOption(idLeft)}
            className="mainComponent-leftBtn"
          >
            {btnLeft}
          </button>
          <button
            onClick={() => setOption(idRight)}
            className="mainComponent-rightBtn"
          >
            {btnRight}
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainComponent;
