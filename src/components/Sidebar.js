import styles from "./styles/sidebar.module.css";

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
    <section className={styles.sidebar}>
      <div className={styles.sidebarLogo}>
        <Logo />
      </div>
      <nav>
        <ul className={styles.sidebarElements}>
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
