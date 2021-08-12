import logo from "../../assets/images/logo.svg";

const Header = () => {
  return (
    <header className="header header--landing">
      <img src={logo} className="header__logo" alt="versus bet logo" />
      <nav className="header__nav">
        <ul>
          <li className="header__nav-link">
            <a href="">¿Cómo jugar?</a>
          </li>
          <li className="header__nav-link">
            <a href="">Reglamento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
