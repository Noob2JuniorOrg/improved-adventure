import Logo from './Logo';
import hamburgerIcon from './images/icon-hamburger.svg';
import Navigation from './Navigation';

function Header(props) {
  return (
    <header className="text-white flex justify-between items-center">
      <Logo />
      <nav>
        <button className="desktop:hidden" onClick={props.onOpen}>
          <img src={hamburgerIcon} />
        </button>
        <Navigation className="hidden desktop:flex" />
      </nav>
    </header>
  );
}

export default Header;
