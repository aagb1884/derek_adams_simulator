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
       <img type='text/javascript' src='https://storage.ko-fi.com/cdn/widget/Widget_2.js'></script><script type='text/javascript'>
         kofiwidget2.init('Support Me on Ko-fi', '#29abe0', 'W7W1URM7B');kofiwidget2.draw();</img> 
      </a>
    </div>
  );
}

export default Footer;
