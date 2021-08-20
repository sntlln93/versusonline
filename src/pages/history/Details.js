import ShowDetail from "./ShowDetail";
import { useState } from "react";

const Details = ({ details }) => {
  const [showDetail, setShowDetail] = useState(null);
  const closeDetail = () => {
    setShowDetail(null);
  };

  return (
    <>
      {showDetail && (
        <ShowDetail
          detail={details.find((d) => showDetail === d.id)}
          handleClose={closeDetail}
        />
      )}
      <h2>Movimientos</h2>

      <ul className="history__details">
        {details.length > 0 &&
          details.map((detail) => {
            return (
              <li key={detail.id} onClick={() => setShowDetail(detail.id)}>
                <div className="history__detail">
                  <span className="history__detail-description">
                    {detail.title}
                  </span>
                  <span className="history__detail-date">
                    {detail.dateForHumans}
                  </span>
                </div>
                <span
                  className={`history__amount ${
                    detail.state === "pendiente"
                      ? "history__amount--pending"
                      : "history__amount--positive"
                  }`}
                >
                  {detail.amount}
                </span>
              </li>
            );
          })}
        {/* 
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
        </li> */}
      </ul>
    </>
  );
};

export default Details;
