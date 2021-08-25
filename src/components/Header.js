import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faCaretDown,
  faUser,
  faKey,
  faSignOutAlt,
  faCoins,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";
import useCredits from "hooks/useCredits";
import { useRef, useEffect, useState } from "react";

const Header = () => {
  const auth = useAuth();
  const { credits } = useCredits();

  const [userMenuIsOpen, setUserMenuIsOpen] = useState(false);
  const userMenu = useRef(null);
  const userMenuContent = useRef(null);

  useEffect(() => {
    const checkIfClickedOutside = (event) => {
      if (!userMenu.current && !userMenuContent.current) {
        return;
      }

      if (!userMenu.current.open) {
        setUserMenuIsOpen(true);
        return;
      }

      if (event.target !== userMenuContent.current) {
        event.preventDefault();
        userMenu.current.open = false;
      }
    };

    window.addEventListener("click", checkIfClickedOutside);
    return () => {
      document.removeEventListener("click", checkIfClickedOutside);
    };
  }, [userMenuIsOpen]);

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

        <details ref={userMenu}>
          <summary>
            <div className="header__user hide-mobile">
              <span>{username}</span>
              <span>
                {credits} <FontAwesomeIcon icon={faCoins} color="#ffb300" />
              </span>
            </div>
            <div className="header__icon hide-mobile">
              <FontAwesomeIcon icon={faCaretDown} />
            </div>
            <div className="header__icon-user hide-desktop">
              <FontAwesomeIcon icon={faUser} />
            </div>
          </summary>
          <div className="header__menu" ref={userMenuContent}>
            <div className="header__user hide-desktop">
              <span>{username} </span>
              <span>
                {credits} <FontAwesomeIcon icon={faCoins} color="#ffb300" />
              </span>
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
