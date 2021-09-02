import Logo from "components/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory } from "react-router-dom";
import { faHome, faHistory, faTrophy } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  const { pathname } = useLocation();
  let history = useHistory();

  return (
    <section className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <nav>
        <ul className="sidebar__elements">
          <li
            className={
              pathname === "/home"
                ? "sidebar__element sidebar__element--selected"
                : "sidebar__element"
            }
            onClick={() => history.push("home")}
          >
            <FontAwesomeIcon icon={faHome} />
            <span>Inicio</span>
          </li>
          <li
            className={
              pathname === "/history"
                ? "sidebar__element sidebar__element--selected"
                : "sidebar__element"
            }
            onClick={() => history.push("history")}
          >
            <FontAwesomeIcon icon={faHistory} />
            <span>Movimientos</span>
          </li>
          <li
            className={
              pathname === "/trophies"
                ? "sidebar__element sidebar__element--selected"
                : "sidebar__element"
            }
            onClick={() => history.push("trophies")}
          >
            <FontAwesomeIcon icon={faTrophy} />
            <span>Logros</span>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
