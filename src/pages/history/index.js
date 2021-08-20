import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";
import { useState } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Coupon from "components/Coupon";
import MoneyOut from "components/icons/MoneyOut";
import MoneyIn from "components/icons/MoneyIn";
import CreditModal from "components/CreditModal";
import addCredits from "services/addCredits";
import useCreditForm from "hooks/useCreditForm";
import checkoutCredits from "services/checkoutCredits";
import { useNotification } from "contexts/Notifications";

const infoMessage = {
  message: "Solicitud registrada con éxito. A la espera de acreditación.",
  type: "info",
};

const errorMessage = {
  message: "Algo salió mal. Si el error persiste, comunicate con nosotros.",
  type: "error",
};

const History = () => {
  const auth = useAuth();
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

  if (!auth.isAuthenticated()) {
    return <Redirect to="/" />;
  }

  const onAdd = (body) => {
    addCredits(body)
      .then(() => notification.add([infoMessage]))
      .catch(() => notification.add([errorMessage]));
  };

  const onCheckout = (body) => {
    checkoutCredits(body)
      .then(() => notification.add([infoMessage]))
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
      <div className="dashboard">
        <Sidebar />
        <main>
          <Header />
          <div className="content">
            <section className="history">
              <div className="history__credits">
                <div className="history__credits-title">
                  <h1>10.487</h1>
                  <p>Créditos disponibles</p>
                </div>
                <div className="history__credits-add">
                  <MoneyIn
                    className="history__credits-icon"
                    onClick={handleShowAdd}
                  />
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
              <h2>Movimientos</h2>

              <ul className="history__details">
                <li>
                  <img
                    alt="detail"
                    src="../assets/images/leagues/conmebol.svg"
                    className="history__detail-image"
                  />
                  <div className="history__detail">
                    <span className="history__detail-description">
                      Boca Jrs. vs Racing Club
                    </span>
                    <span className="history__detail-date">Ayer</span>
                  </div>
                  <span className="history__amount history__amount--pending">
                    pendiente
                  </span>
                </li>

                <li>
                  <img
                    alt="detail"
                    src="../assets/images/leagues/conmebol.svg"
                    className="history__detail-image"
                  />
                  <div className="history__detail">
                    <span className="history__detail-description">
                      Cargaste créditos
                    </span>
                    <span className="history__detail-date">Ayer</span>
                  </div>
                  <span className="history__amount history__amount--positive">
                    1100
                  </span>
                </li>

                <li>
                  <img
                    alt="detail"
                    src="../assets/images/leagues/conmebol.svg"
                    className="history__detail-image"
                  />
                  <div className="history__detail">
                    <span className="history__detail-description">
                      River Plate vs Central Córdoba
                    </span>
                    <span className="history__detail-date">Ayer</span>
                  </div>
                  <span className="history__amount history__amount--negative">
                    1100
                  </span>
                </li>
              </ul>
            </section>

            <Coupon />
          </div>
        </main>
      </div>
    </>
  );
};

export default History;
