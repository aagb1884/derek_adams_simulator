import { useState, useEffect } from "react";
import MainComponent from "../../components/MainComponent/MainComponent";
import texts from "../../utils/texts";
import "./gameScreen.css";

function GameScreen() {
  const [option, setOption] = useState(texts[0].id);
  const [numberOfTimesInTheJob, setNumberOfTimesInTheJob] = useState(3);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

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
    }
  }, [option]);

  
  texts[0].text = `You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."
This will be your ${numberOfTimesInTheJob}th time managing Ross County.`;

  return <div className="gameScreen-container">{components[option - 1]}</div>;
}

export default GameScreen;
