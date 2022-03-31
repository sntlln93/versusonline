import { useState, useEffect } from "react";

import styles from "./referrals.module.css";
import fetchReferralActivity from "../../services/fetchReferralActivity";
import useTimeAgo from "hooks/useTime";

const ReferralActivity = () => {
  const [referralActivity, setReferralActivity] = useState([]);
  const timeFormatter = useTimeAgo();

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem("user"));

    fetchReferralActivity(token)
      .then((response) => setReferralActivity(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <ul className={styles.referralActivity}>
      {referralActivity.length ? (
        referralActivity.map((referral, index) => (
          <li key={index}>
            <div className={styles.referredDetail}>
              <span className={styles.referredDetailDescription}>
                {referral.title}
              </span>
              <span className={styles.referredDetailDate}>
                {timeFormatter.TimeAgo(new Date(referral.timestamp))}
              </span>
            </div>
          </li>
        ))
      ) : (
        <li>
          <div className={styles.referredEmpty}>
            <span>Aún no tenés referidos.</span>
          </div>
        </li>
      )}
    </ul>
  );
};

export default ReferralActivity;
