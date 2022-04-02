import { useState } from "react";

import styles from "./referrals.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faCopy } from "@fortawesome/free-regular-svg-icons";
import { faShareAlt } from "@fortawesome/free-solid-svg-icons";

import { useNotification } from "contexts/Notifications";
import { useAuth } from "contexts/Auth";
import { useEffect } from "react";

const ReferralLink = () => {
  const { getUser } = useAuth();
  const notification = useNotification();
  const [showShare, setShowShare] = useState(false);

  const link = `${process.env.REACT_APP_URL}/register?refby=${getUser().id}`;

  const onShare = () => {
    navigator
      .share({
        title: "VersusBet",
        text: "Sumáte a la comunidad de Versus.",
        url: link,
      })
      .then(() => {
        notification.add([{ message: "¡Compartido!", type: "success" }]);
      })
      .catch((error) => console.error(error));
  };

  useEffect(() => {
    if (navigator.canShare()) setShowShare(true);
  }, []);

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

        {showShare && (
          <div
            onClick={onShare}
            className={styles.btn + " " + styles.btnWhatsapp}
          >
            <button>
              <FontAwesomeIcon size="lg" icon={faShareAlt} />
            </button>
          </div>
        )}

        {!showShare && (
          <div className={styles.btn + " " + styles.btnWhatsapp}>
            <a
              target="_blank"
              href={`https://api.whatsapp.com/send/?phone&text=${link}`}
              rel="noreferrer"
            >
              <FontAwesomeIcon size="lg" icon={faWhatsapp} />
            </a>
          </div>
        )}

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
