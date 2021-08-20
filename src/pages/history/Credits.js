import MoneyOut from "components/icons/MoneyOut";
import MoneyIn from "components/icons/MoneyIn";
import CreditModal from "components/CreditModal";
import { useState } from "react";
import useCreditForm from "hooks/useCreditForm";
import { useNotification } from "contexts/Notifications";
import addCredits from "services/addCredits";
import checkoutCredits from "services/checkoutCredits";

const Credits = ({ setRefresh }) => {
  const [addModal, setAddModal] = useState(false);
  const [checkoutModal, setCheckoutModal] = useState(false);
  const notification = useNotification();
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
      .catch(() => notification.add([errorMessage]));
  };

  const onCheckout = (body) => {
    checkoutCredits(body)
      .then(() => {
        setRefresh(true);
        notification.add([infoMessage]);
        setCheckoutModal(false);
      })
      .catch(() => notification.add([errorMessage]));
  };

  const handleShowAdd = () => {
    setAddModal(true);
    setCheckoutModal(false);
  };
  const handleShowCheckout = () => {
    setCheckoutModal(true);
    setAddModal(false);
  };

  const closeModal = () => {
    setAddModal(false);
    setCheckoutModal(false);
  };

  return (
    <>
      {addModal && (
        <CreditModal
          handleClose={closeModal}
          title="Añadir créditos"
          header="¿Cuánto querés añadir?"
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
          title="Canjear créditos"
          header="¿Cuánto querés canjear?"
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
          <h1>10.487</h1>
          <p>Créditos disponibles</p>
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
            <br /> créditos
          </span>
        </div>
      </div>
    </>
  );
};

export default Credits;

const infoMessage = {
  message: "Solicitud registrada con éxito. A la espera de acreditación.",
  type: "info",
};

const errorMessage = {
  message: "Algo salió mal. Si el error persiste, comunicate con nosotros.",
  type: "error",
};
