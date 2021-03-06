import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import MoneyOut from "components/icons/MoneyOut";
import MoneyIn from "components/icons/MoneyIn";
import CreditModal from "components/CreditModal";
import { useState } from "react";
import useCreditForm from "hooks/useCreditForm";
import { useNotification } from "contexts/Notifications";
import addCredits from "services/addCredits";
import checkoutCredits from "services/checkoutCredits";
import useCredits from "hooks/useCredits";

const Credits = ({ setRefresh }) => {
  const [addModal, setAddModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const notification = useNotification();
  const { credits } = useCredits();
  const {
    formattedAmount,
    phone,
    handleKeyPress,
    handleDeleteKeyPress,
    handlePhoneInput,
    handleSubmit,
  } = useCreditForm();

  const onAdd = (body) => {
    addCredits(body)
      .then(() => {
        setRefresh(true);
        notification.add([infoMessage]);
        setAddModal(false);
      })
      .catch((error) => {
        const errorMessage = {
          message: error.response.data.message,
          type: "error",
        };
        notification.add([errorMessage]);
      });
  };

  const onCheckout = (body) => {
    checkoutCredits(body)
      .then(() => {
        setRefresh(true);
        notification.add([infoMessage]);
        setCheckoutModal(false);
      })
      .catch((error) => {
        const errorMessage = {
          message: error.response.data.message,
          type: "error",
        };
        notification.add([errorMessage]);
      });
  };

  const handleShowAdd = () => {
    document.body.style.overflow = "hidden";
    setAddModal(true);
    setCheckoutModal(false);
  };
  const handleShowCheckout = () => {
    document.body.style.overflow = "hidden";
    setCheckoutModal(true);
    setAddModal(false);
  };

  const closeModal = () => {
    document.body.style.overflow = "scroll";

    setAddModal(false);
    setCheckoutModal(false);
  };

  return (
    <>
      {addModal && (
        <CreditModal
          handleClose={closeModal}
          title="A??adir cr??ditos"
          header="??Cu??nto quer??s a??adir?"
          formattedAmount={formattedAmount}
          phone={phone}
          handleKeyPress={handleKeyPress}
          handleDeleteKeyPress={handleDeleteKeyPress}
          handlePhoneInput={handlePhoneInput}
          handleSubmit={(event) => handleSubmit(event, onAdd)}
        />
      )}

      {checkoutModal && (
        <CreditModal
          handleClose={closeModal}
          title="Canjear cr??ditos"
          header="??Cu??nto quer??s canjear?"
          formattedAmount={formattedAmount}
          phone={phone}
          handleKeyPress={handleKeyPress}
          handleDeleteKeyPress={handleDeleteKeyPress}
          handlePhoneInput={handlePhoneInput}
          handleSubmit={(event) => handleSubmit(event, onCheckout)}
        />
      )}
      <div className="history__credits">
        <div className="history__credits-title">
          <h1>
            {credits}
            <FontAwesomeIcon icon={faCoins} />
          </h1>
          <p>Cr??ditos disponibles</p>
        </div>
        <div className="history__credits-add">
          <MoneyIn className="history__credits-icon" onClick={handleShowAdd} />
          <span>
            Ingresar
            <br /> dinero
          </span>
        </div>
        <div className="history__credits-checkout">
          <MoneyOut
            className="history__credits-icon"
            onClick={handleShowCheckout}
          />
          <span>
            Canjear
            <br /> cr??ditos
          </span>
        </div>
      </div>
    </>
  );
};

export default Credits;

const infoMessage = {
  message: "Solicitud registrada con ??xito. A la espera de acreditaci??n.",
  type: "info",
};
