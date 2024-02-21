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
  const [loopCount, setLoopCount] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [option]);

  // Function to play sound effect and show GIF
  const playSoundEffectAndShowGif = () => {
    const audio = new Audio(static_wav);
    audio.play();
    setShowGif(true);

    // Set a timeout to hide the GIF and reset the audio after 5 seconds
    setTimeout(() => {
      setShowGif(false);
      audio.currentTime = 0; // Reset the audio to the start
      audio.pause(); // Pause the audio
    }, 5000);
  };

  useEffect(() => {
    // Check if the current text object has a loopCountUpdate function
    if (texts[option - 1].loopCountUpdate) {
      // Call the loopCountUpdate function to update the loop count
      texts[option - 1].loopCountUpdate(loopCount + 1);
    }
  }, [option]);

  // Update the text for id 1 with the new number of times in the job
  texts[0].text = `You awake to find yourself manager of Ross County F.C.

 This comes after Malky Mackay was sacked last week for being bad at his job.

Chairman Roy MacGregor said he had "known for a number of years that Derek wanted to come".
"We had 70 applications to go through, but the name Derek Adams kept coming back," he said.
"For us, it was that knowledge, determination and passion for Ross County that was the deciding factors.
"When we decided that was the route we wanted to go, we got on to it fairly quickly over the weekend and, with Morecambe's agreement, we managed to attract Derek back to the club."
Adams has now managed County ${numberOfTimesInTheJob} times.`;

console.log(loopCount)

  return (
    <div className="gameScreen-container">
      <div className="staticScreen">{showGif && <img src={static_gif} alt="static" />}</div>
      <MainComponent
        key={texts[option - 1].id}
        date={texts[option - 1].date}
        text={texts[option - 1].text}
        btnLeft={texts[option - 1].options[0].text}
        btnRight={texts[option - 1].options[1].text}
        setOption={setOption}
        idLeft={texts[option - 1].options[0].nextText}
        idRight={texts[option - 1].options[1].nextText}
        image={texts[option - 1].image}
        alt={texts[option - 1].alt}
      />
      {/* Increment loop count when reaching the end */}
      {option === 1 && loopCount > 0 && setLoopCount((prev) => prev + 1)}
    </div>
  );
}

export default GameScreen;