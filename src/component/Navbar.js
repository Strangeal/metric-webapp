import { Link } from 'react-router-dom';
import { MdOutlineArrowBackIos } from 'react-icons/md';

const Navbar = () => (
  <header>
    <nav className="navbar">
      <ul className="nav__menu">
        <li className="nav__item">
          <Link to="/">
            <MdOutlineArrowBackIos />
          </Link>
        </li>
      </ul>

      <Link to="/" className="nav__brand">
        <span>DaxPay</span>
      </Link>
    </nav>
  </header>
);

export default Navbar;
