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
import useCredits from "hooks/useCredits";

const Header = () => {
  const auth = useAuth();
  const { credits } = useCredits();

  const username = auth.getUser() ? auth.getUser().name : "";
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
              <span>{credits}</span>
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
              <span>{username} </span>
              <span>{credits}</span>
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
