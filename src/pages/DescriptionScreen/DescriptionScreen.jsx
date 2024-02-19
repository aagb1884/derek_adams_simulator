import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
// import descriptionScreenImage from "../../assets/descriptionScreenImage.jpg";
// import { diagramLink } from "../../utils/diagramLink";
import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="descriptionScreen-container">
      <Header />
      <h2 className="descriptionScreen-header">Description</h2>
      <div className="descriptionScreen-text">
        {/* <img
          className="descriptionScreen-image"
          src={descriptionScreenImage}
          alt="Futuristic towers"
        /> */}
        <div>
          I made this game in React JS after reading an article about making text adventure games in React.
          More info about it can be found{" "}
          <a
                className="descriptionScreen-link"
                href="https://medium.com/@dimterion/making-an-interactive-text-adventure-game-with-react-779667cca2cb"
                target="_blank"
                rel="noopener noreferrer"
              >
            here
          </a>
          
        </div>
        <br></br>
    
        </div>
       
        <br></br>
        <div>
          Overall, this is a more or less final version of the game, although I
          might add some bits and pieces here and there occasionally.
        </div>
        <div>
          <h3 className="descriptionScreen-subHeader">Tech Stack</h3>
          <ul>
            <li>React</li>
            <li>React Router</li>
            <li>CSS</li>
          </ul>
        </div>
        
      <Footer />
    </div>
  );
}

export default DescriptionScreen;
