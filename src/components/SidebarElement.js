import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, useHistory } from "react-router-dom";

export const SidebarElement = ({ icon, route, name }) => {
  const { pathname } = useLocation();
  let history = useHistory();

  return (
    <li
      className={
        pathname === route
          ? "sidebar__element sidebar__element--selected"
          : "sidebar__element"
      }
      onClick={() => history.push(route)}
    >
      <FontAwesomeIcon icon={icon} />
      <span>{name}</span>
    </li>
  );
};
