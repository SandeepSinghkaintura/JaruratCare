import { Link } from "react-router-dom";
import "../style/navbar.css";

const Header = function(){

    return <>
<div className="navbox">
      <div id="leftnav">
        <h2>Jarurat Care</h2>
      </div>

      <div id="rightnav">
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li>
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li>
            <Link to="/patient" className="nav-link">Patient</Link>
          </li>
        </ul>
      </div>
    </div>
    </>
}

export default Header;