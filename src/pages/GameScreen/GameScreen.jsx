import { useState, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import "./gameScreen.css";

import static_gif from '../../images/static.gif';
import static_wav from "../../audio/static.wav";

function GameScreen() {
  const [option, setOption] = useState(texts[0].id);
  const [numberOfTimesInTheJob, setNumberOfTimesInTheJob] = useState(3);
  const [showGif, setShowGif] = useState(false);
  const [loopCount, setLoopCount] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  const playSoundEffect = () => {
    const audio = new Audio(static_wav);
    audio.play();
    setShowGif(true);

    setTimeout(() => {
      setShowGif(false);
    }, 5000);

  };


  
  const components = texts.map((text) => {
    return (
      <content className="gameScreen"> 
        
        <MainComponent
          key={text.id}
          date={text.date}
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

  useEffect(() => {
    if (option === 1) {
      setNumberOfTimesInTheJob(prev => prev + 1);
      playSoundEffect();
    }
  }, [option]);

  
  texts[0].text = `You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."
Adams has now managed County ${numberOfTimesInTheJob} times.`;

  return <div className="gameScreen-container">
    <div className="staticScreen">{showGif && <img src={static_gif} alt="static" />}</div>
    {components[option - 1]}</div>;
}

export default GameScreen;