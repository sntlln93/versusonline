import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faUser,
  faKey,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";

const Header = () => {
  const auth = useAuth();
  const username = auth.user ? auth.user.name : "";

  return (
    <header className="header">
      <div className="header__actions">
        <div className="search search--collapsable">
          <input
            className="search__input"
            type="text"
            placeholder="Busca equipos o torneos"
            aria-label="Busca equipos o torneos"
          />
          <button className="search__button">
            <FontAwesomeIcon icon={faSearch} aria-label="buscar" />
          </button>
        </div>

        <details>
          <summary>
            <div className="header__user hide-mobile">
              <span>{username}</span>
              <span>10.487 créditos</span>
            </div>
            <div className="header__icon hide-mobile">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className="header__icon-user hide-desktop">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </summary>
          <div className="header__menu">
            <div className="header__user hide-desktop">
              <span>CLEGUIZAMON </span>
              <span>10.487 créditos</span>
            </div>
            <hr className="hide-desktop" />
            <ul>
              <li>
                <Link to="/change-password">
                  <FontAwesomeIcon icon={faKey} />
                  Cambiar contraseña
                </Link>
              </li>
              <li>
                <div onClick={auth.signout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                  Cerrar sesión
                </div>
              </li>
            </ul>
          </div>
        </details>
      </div>
    </header>
  );
};

export default Header;
