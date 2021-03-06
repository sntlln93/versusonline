import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReceipt } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

const Coupon = ({
  selectedGames,
  totalQuota,
  amount,
  profit,
  handleRemoveFromCoupon,
  handleChangeAmount,
  handleBet,
}) => {
  const coupon = useRef(null);
  const showCouponBtn = useRef(null);

  const handleShowCoupon = () => {
    coupon.current.style.display = "block";
    document.body.style.overflow = "hidden";
  };

  const handleHideCoupon = () => {
    document.body.style.overflow = "scroll";
    coupon.current.style.display = "none";
  };

  const handleHideCouponFromBackground = (event) => {
    if (coupon.current === event.target && !showCouponBtn.current) {
      handleHideCoupon();
    }
  };

  const onBetSubmit = () => handleBet();

  return (
    <>
      <button
        onClick={handleShowCoupon}
        ref={showCouponBtn}
        className="btn btn--floating btn--pending coupon-btn--hide-and-show"
      >
        <FontAwesomeIcon icon={faReceipt} />
      </button>
      <section
        className="coupon"
        ref={coupon}
        onClick={handleHideCouponFromBackground}
      >
        <div className="coupon__title">
          <h2>Cupón</h2>
          <span onClick={handleHideCoupon} className="coupon__close">
            &times;
          </span>
        </div>
        {selectedGames &&
          selectedGames.map((bet, index) => {
            return (
              <div key={index} className="coupon__detail">
                <div
                  onClick={() => handleRemoveFromCoupon(bet.game.id)}
                  className="coupon__detail-delete"
                >
                  <span>&times;</span>
                </div>
                <h5>{`${bet.game.local.name} vs ${bet.game.away.name}`}</h5>
                <div className="coupon__option">
                  <span>{bet.selected.name}</span>
                  <span>{bet.selected.quota}</span>
                </div>
              </div>
            );
          })}

        {selectedGames.length ? (
          <>
            <div className="coupon__input">
              <h2>Monto</h2>
              <input
                type="number"
                value={amount.toString()}
                onChange={handleChangeAmount}
              />
            </div>
            <div className="coupon__total">
              <p>
                <small>Cuota</small>
                <small>Ganancia</small>
              </p>
              <p>
                <strong className="coupon__amount">{totalQuota}</strong>
                {/* <strong className="coupon__amount">{profit}</strong> */}
                <strong className="coupon__amount">{profit}</strong>
              </p>
              <button onClick={onBetSubmit} className="btn btn--full-width">
                Jugar
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="coupon__input" style={{ height: "15rem" }}>
              <p style={{ margin: "auto" }}>
                Todavía no hay jugadas registradas
              </p>
            </div>
            <div className="coupon__total"></div>
          </>
        )}
      </section>
    </>
  );
};

export default Coupon;
