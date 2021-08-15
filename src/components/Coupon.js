import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";

const Coupon = () => {
  return (
    <>
      <button className="btn btn--floating btn--pending coupon-btn--hide-and-show">
        <FontAwesomeIcon icon={faReceipt} />
      </button>
      <section className="coupon">
        <div className="coupon__title">
          <h2>Cupón</h2>
          <span className="coupon__close">&times;</span>
        </div>
        <div className="coupon__detail">
          <div className="coupon__detail-delete">
            <span>&times;</span>
          </div>
          <h5>Boca Jrs. vs Racing Club</h5>
          <div className="coupon__option">
            <span>Boca Jrs.</span>
            <span>1.04</span>
          </div>
        </div>
        <div className="coupon__detail">
          <div className="coupon__detail-delete">
            <span>&times;</span>
          </div>
          <h5>Real Madrid vs FC Barcelona</h5>
          <div className="coupon__option">
            <span>FC Barcelona</span>
            <span>2.00</span>
          </div>
        </div>
        <div className="coupon__input">
          <h2>Monto</h2>
          <input type="number" />
        </div>
        <div className="coupon__total">
          <p>
            <small>Cuota</small>
            <small>Ganancia</small>
          </p>
          <p>
            <strong className="coupon__amount">2.08</strong>
            <strong className="coupon__amount">$1.664</strong>
          </p>
          <button className="btn btn--full-width">Jugar</button>
        </div>
      </section>
    </>
  );
};

export default Coupon;
