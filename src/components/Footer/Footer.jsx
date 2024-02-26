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
        Version 1.1.0
      </a>
      <br />
      <a
        className="footer-link"
        href="https://andrewblair.co.uk/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Made by Andrew Blair
      </a>
      <br />
      <a href='https://ko-fi.com/freelance_liar' target='_blank'>Suport My Work at Ko-fi.com</a>
    </div>
  );
}

export default Footer;
