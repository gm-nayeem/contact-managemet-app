import { Link } from "react-router-dom";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul>
        <Link to="/new-contact" className="link">
          <li>Add Contact</li>
        </Link>
        <Link to="/contacts" className="link">
          <li>All Contact</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
