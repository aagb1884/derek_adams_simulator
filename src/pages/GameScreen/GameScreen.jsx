import { useState, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import "./gameScreen.css";

function GameScreen() {
  const [option, setOption] = useState(texts[0].id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  const components = texts.map((text) => {
    return (
      <content className="gameScreen"> 
        
        <MainComponent
          key={text.id}
          text={text.text}
          btnLeft={text.options[0].text}
          btnRight={text.options[1].text}
          setOption={setOption}
          idLeft={text.options[0].nextText}
          idRight={text.options[1].nextText}
          image={text.image}
          alt={text.alt}
          
        />
      </content>
    );
  });

  return <div className="gameScreen-container">{components[option - 1]}</div>;
}

export default GameScreen;
