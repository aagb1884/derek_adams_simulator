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
        If you can, please support my hosting costs for this app.
      </a>
    </div>
  );
}

export default Footer;
