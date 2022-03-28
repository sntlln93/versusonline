import styles from "./referrals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";

const ReferralActivity = () => {
  return (
    <>
      <ul className={styles.referralActivity}>
        <li>
          <div className={styles.referredDetail}>
            <span className={styles.referredDetailDescription}>
              ¡Marcos ha hecho su primera jugada!
            </span>
            <span className={styles.referredDetailDate}>hace 2 minutos</span>
          </div>
          <span className={styles.referredDetailReward}>$50</span>
        </li>

        <li>
          <div className={styles.referredDetail}>
            <span className={styles.referredDetailDescription}>
              ¡Marcos se ha registrado!
            </span>
            <span className={styles.referredDetailDate}>ayer</span>
          </div>
          <span className={styles.referredDetailInfo}>
            <FontAwesomeIcon icon={faInfoCircle} />
          </span>
        </li>
      </ul>
    </>
  );
};

export default ReferralActivity;
