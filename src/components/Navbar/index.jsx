import { Link } from "react-router-dom";
import reactLogo from "assets/images/react.svg";

// Styles
import styles from "./styles.module.scss";

const Navbar = () => (
  <nav className={styles.__navbar}>
    <img className={styles.__logo_react} src={reactLogo} alt="react logo" />
    <Link to="/">Home</Link>
    <Link to="/page-1">Page 1</Link>
    <Link to="/page-2">Page 2</Link>
  </nav>
);

export default Navbar;
