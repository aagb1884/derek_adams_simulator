import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./descriptionScreen.css";

function DescriptionScreen() {
  return (
    <div className="descriptionScreen-container">
      
      <div className="descriptionScreen-text">
        
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
          .
        </div>
        <br />
        <div>
          The game is a text based Choose-Your-Own-Adventure-style football management game (specifically the 12-match reign of Derek Adams at Scottish Premiership club Ross County during the 2023-24 season) 
          with references to Football Manager and a surprising amount of medieval Welsh manuscripts.
        </div>
        <br />
        <div>
          The game is aimed at Scottish football fans and the terminally online.
        </div>
        <br />
      </div>
        <br />
        <div>
          <p>Using the article above as a starting point, I wrote the game in about a week.</p>
          <p>This is a basic version of the game. I hope to make it faster/shiner/more of an existential nightmare than it is now.</p>
        </div>
        <br />
        <div>
          <h3 className="descriptionScreen-subHeader">Tech Stack</h3>
          <ul className="techStack-list">
            <li><a href="https://react.dev/">React</a></li>
            <li><a href="https://v5.reactrouter.com/">React Router</a></li>
            <li>CSS</li>
          </ul>
        </div>
     
    </div>
  );
}

export default DescriptionScreen;
