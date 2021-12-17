import { Link } from 'react-router-dom';
import reactLogo from 'assets/images/react.svg';

const Navbar = () => (
  <nav className="navbar" >
    <img className="logo-react" src={reactLogo} alt="react logo"/>
    <Link to="/">Home</Link>
    <Link to="/page-1">Page 1</Link>
    <Link to="/page-2">Page 2</Link>
  </nav>
);

export default Navbar;
