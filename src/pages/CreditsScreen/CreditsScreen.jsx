import { Link } from "react-router-dom";
import Footer from "../../components/Footer/Footer";


import "./creditsScreen.css";

function CreditsScreen() {
  return (
    <section className="creditsScreen-container">
      <h1 className="creditsScreen-header">Credits</h1>
      <div className="creditsScreen-block">
        <h2 className="creditsScreen-text">Written and developed by{" "}<a
        className="aboutScreen-personalLink"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >Andrew Blair
      </a>
      </h2>
      </div>
      <br />
      <div className="creditsScreen-content"> 
        <h2 className="creditsScreen-text">Image credits</h2>
        <br />
        
        <ul className="imageCreditsList">
          <li><a className="creditsScreen-pictureCredit"
                href="https://en.m.wikipedia.org/wiki/File:Tynecastle_Park,_January_2018.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Tynecastle by Paul Henery</a> on <a href="https://creativecommons.org/licenses/by/4.0/deed.en">Creative Commons 4.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:GlobalEnergyStadiumDingwall.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Victoria Park by Euan Nelson</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:St._Mirren_Park,_Paisley_-_geograph.org.uk_-_3950186.jpg"
                target="_blank"
                rel="noopener noreferrer">
          St Mirren Park by G Laird</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Celtic_park_2.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Celtic Park by Zhi Yong Lee</a> on <a href="https://creativecommons.org/licenses/by/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Almondvale_Stadium_from_the_air_(geograph_5829416).jpg"
                target="_blank"
                rel="noopener noreferrer">
          Almondvale Stadium by Thomas Nugent</a> on <a href="https://creativecommons.org/licenses/by-sa/2.0/deed.en">Creative Commons 2.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="hhttps://commons.wikimedia.org/wiki/File:Knee_Kick_to_Groin.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Knee Kick to Groin by Bill Valentine</a> on <a href="https://creativecommons.org/licenses/by-sa/3.0/">Creative Commons 3.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Walll_PANCH!.jpg"
                target="_blank"
                rel="noopener noreferrer">
          Wall PANCH! by Qəribə oğlan</a> on <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.en">Creative Commons 4.0 Licence</a>.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg"
                target="_blank"
                rel="noopener noreferrer">
          'Zwei raufende Buben' (Two Boys Fighting) by Giulio del Torren</a>. Public domain.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg"
                target="_blank"
                rel="noopener noreferrer">
          'Zwei raufende Buben' (Two Boys Fighting) by Giulio del Torren</a>. Public domain.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://commons.wikimedia.org/wiki/File:Giulio_del_Torre_Zwei_raufende_Buben_1927.jpg"
                target="_blank"
                rel="noopener noreferrer">
          'Zwei raufende Buben' (Two Boys Fighting) by Giulio del Torren</a>. Public domain.
          </li>
          <li><a className="creditsScreen-pictureCredit"
                href="https://www.deviantart.com/tbh-1138/art/TV-Static-214352630"
                target="_blank"
                rel="noopener noreferrer">
          TV Static by TBH-1138</a>. 
          </li>
        </ul>
        <ul className="audio-creditsList">
        <li><a className="creditsScreen-audioCredit"
                href="https://freesound.org/people/PantherK/sounds/585783/"
                target="_blank"
                rel="noopener noreferrer">
          Static fade out by PantherK</a>. 
          </li>
        </ul>
        </div>
      <br />
      <br />
          
      <Link className="creditsScreen-startScreenLink" to="/">
        Start Screen
      </Link>
      <Link className="creditsScreen-startScreenLink" to="/about">
          About
      </Link>
      <Footer />
    </section>
  );
}

export default CreditsScreen;
