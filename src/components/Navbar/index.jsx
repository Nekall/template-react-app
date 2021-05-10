import { Link } from 'react-router-dom';
import reactLogo from 'assets/images/react.svg';

const Navbar = () => (
  <nav className="navbar" >
    <img className="logo-react" src={reactLogo} alt="Logo React" />
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/documentation">Documentation</Link>
  </nav>
);

export default Navbar;
