import { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import "./mainComponent.css";


function MainComponent({
  text,
  date,
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
    <>
    <label className="mainComponent-menuBtn">
    <input
      type="checkbox"
      checked={menuToggle}
      onChange={handleMenuToggle}
    />
  </label>
    <div className="mainComponent-container">
      <h1>You are Derek Adams</h1>
      
        {menuToggle && <Header />}
             
      <div className="mainComponent-imageAndText">
      
        <img className="mainComponent-image" src={image} alt={alt} />
        <p className="mainComponent-text">
          <b>{date}</b>
          <br />
          <br />
          {text}</p>
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
    </>
  );
}

export default MainComponent;
