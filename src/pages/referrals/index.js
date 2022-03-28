import Sidebar from "components/Sidebar";
import Header from "components/Header";

import ReferralLink from "./ReferralLink";
import ReferralActivity from "./ReferralActivity";

import styles from "./referrals.module.css";

const Friends = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div className={styles.container}>
          <ReferralLink />
          <ReferralActivity />
        </div>
      </main>
    </div>
  );
};

export default Friends;
