const Details = () => {
  return (
    <>
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
    </>
  );
};

export default Details;
