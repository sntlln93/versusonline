import { useState, useEffect } from "react";

import styles from "./referrals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";

import { useNotification } from "contexts/Notifications";

const ReferralLink = () => {
  const [link, setLink] = useState("");

  useEffect(() => {
    setLink("https://versusbetonline.com/join/434saf4d4a87s");
  }, []);

  const notification = useNotification();

  const onCopy = () => {
    navigator.clipboard.writeText(link);
    notification.add([{ message: "¡Copiado!", type: "success" }]);
  };

  return (
    <div className={styles.card}>
      <h2>Compartí tu enlace</h2>
      <h6>
        Copiá tu enlace y compartilo con tus amigos para obtener un bonus.
      </h6>

      <div className={styles.referral}>
        <div className={styles.referralLink}>
          <input onClick={onCopy} type="text" readOnly={true} value={link} />
        </div>

        <div className={styles.btn + " " + styles.btnWhatsapp}>
          <a
            target="_blank"
            href={`https://wa.me/send?text=${link}`}
            rel="noreferrer"
          >
            <FontAwesomeIcon size="lg" icon={faWhatsapp} />
          </a>
        </div>

        <div onClick={onCopy} className={styles.btn + " " + styles.btnCopy}>
          <button>
            <FontAwesomeIcon size="lg" icon={faCopy} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReferralLink;
