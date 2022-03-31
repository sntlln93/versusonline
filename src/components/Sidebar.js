import Logo from "components/Logo";
import { SidebarElement } from "./SidebarElement";
import {
  faHome,
  faHistory,
  faTrophy,
  faUserFriends,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <div className="sidebar__logo">
        <Logo />
      </div>
      <nav>
        <ul className="sidebar__elements">
          <SidebarElement icon={faHome} name="Inicio" route="/home" />
          <SidebarElement
            icon={faHistory}
            name="Movimientos"
            route="/history"
          />
          <SidebarElement icon={faTrophy} name="Logros" route="/trophies" />
          <SidebarElement
            icon={faUserFriends}
            name="Referidos"
            route="/referrals"
          />
        </ul>
      </nav>
    </section>
  );
};

export default Sidebar;
