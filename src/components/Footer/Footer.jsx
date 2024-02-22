import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <a
        className="footer-link"
        href="https://github.com/aagb1884/derek_adams_simulator"
        target="_blank"
        rel="noopener noreferrer"
      >
        Version 1.0
      </a>
      <br />
      <a
        className="aboutScreen-personalLink"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Andrew Blair
      </a>
      <br />
      <a
        className="aboutScreen-personalLink"
        href="https://ko-fi.com/freelance_liar"
        target="_blank"
        rel="noopener noreferrer"
      >
      <img height='36' style='border:0px;height:36px;' src='https://storage.ko-fi.com/cdn/kofi2.png?v=3' border='0' alt='Support My Work at ko-fi.com' />
      </a>
    </div>
  );
}

export default Footer;
