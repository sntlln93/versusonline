import styles from "./styles/sidebar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory } from "react-router-dom";

export const SidebarElement = ({ icon, route, name }) => {
  const { pathname } = useLocation();
  let history = useHistory();

  return (
    <li
      className={
        pathname === route
          ? styles.sidebarElement + " " + styles.SelectedSidebarElement
          : styles.sidebarElement
      }
      onClick={() => history.push(route)}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </li>
  );
};
