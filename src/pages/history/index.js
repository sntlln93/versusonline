import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Coupon from "components/Coupon";
import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";
import MoneyOut from "components/icons/MoneyOut";
import MoneyIn from "components/icons/MoneyIn";

const History = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
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
                <MoneyIn className="history__credits-icon" />
                <span>
                  Ingresar
                  <br /> dinero
                </span>
              </div>
              <div className="history__credits-checkout">
                <MoneyOut className="history__credits-icon" />
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
  );
};

export default History;
