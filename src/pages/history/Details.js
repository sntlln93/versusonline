import ShowDetail from "./ShowDetail";
import { useState } from "react";
import { IconButton } from "components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const Details = ({ details }) => {
  const [showDetail, setShowDetail] = useState(null);
  const closeDetail = () => {
    document.body.style.overflow = "scroll";
    setShowDetail(null);
  };

  const handleShowDetail = (detailId) => {
    document.body.style.overflow = "hidden";
    setShowDetail(detailId);
  };

  const getClassName = (detail) => {
    if (detail.state === "ganadora") {
      return "history__amount--positive";
    } else if (detail.state === "perdedora") {
      return "history__amount--negative";
    } else if (detail.state === "pendiente") {
      switch (detail.type) {
        case "CARGA":
          return "history__amount--positive history__amount--pending";

        case "RETIRO" || "JUGADA":
          return "history__amount--negative history__amount--pending";

        default:
          return "history__amount--negative history__amount--pending";
      }
    }

    switch (detail.type) {
      case "CARGA":
        return "history__amount--positive";

      case "RETIRO" || "JUGADA":
        return "history__amount--negative";

      default:
        return "history__amount--negative";
    }
  };

  return (
    <>
      {showDetail && (
        <ShowDetail
          detail={details.find((d) => showDetail === d.id)}
          handleClose={closeDetail}
          getClassName={getClassName}
        />
      )}
      <h2>Movimientos</h2>

      <ul className="history__details">
        {details.length > 0 &&
          details.map((detail) => {
            return (
              <li key={detail.id} onClick={() => handleShowDetail(detail.id)}>
                <IconButton
                  handleClick={() => handleShowDetail(detail.id)}
                  style={{ marginRight: "1em" }}
                  icon={<FontAwesomeIcon icon={faEye} />}
                />
                <div className="history__detail">
                  <span className="history__detail-description">
                    {detail.title}
                  </span>
                  <span className="history__detail-date">
                    {detail.dateForHumans}
                  </span>
                </div>
                <span className={`history__amount ${getClassName(detail)}`}>
                  {detail.profit || detail.amount}
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default Details;
