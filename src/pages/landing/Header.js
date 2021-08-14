import Logo from "components/Logo";

const Header = () => {
  return (
    <header className="header header--landing">
      <Logo classStyle="header__logo" />
      <nav className="header__nav">
        <ul>
          <li className="header__nav-link">
            <a href="#guide">¿Cómo jugar?</a>
          </li>
          <li className="header__nav-link">
            <a href="#rules">Reglamento</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
