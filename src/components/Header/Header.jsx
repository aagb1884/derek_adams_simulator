import { Link, useLocation } from "react-router-dom";
import "./header.css";

function Header() {
  const location = useLocation();

  return (
    <div className="header-container">
      <Link className="header-link" to="/">
        Start Screen
      </Link>
            
      <Link className="header-link" to="/about">
        About
      </Link>
    </div>
  );
}

export default Header;
