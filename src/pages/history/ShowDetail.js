import { useRef } from "react";

const ShowDetail = ({ detail, handleClose }) => {
  const modalBg = useRef(null);

  const handleCloseFromBackground = (event) => {
    if (event.target === modalBg.current) {
      handleClose();
    }
  };

  return (
    <div onClick={handleCloseFromBackground} className="modal-bg" ref={modalBg}>
      <div className="modal">
        <div className="modal__header">
          <h2>Detalles de la operación</h2>
          <span onClick={handleClose} className="modal__close">
            &times;
          </span>
        </div>
        <div className="modal__content">
          <div className="history__show">
            <h2>Operación</h2>
            <p>
              <span>Operación:</span> {`#${detail.id}`}
            </p>
            <p>
              <span>Tipo:</span> {detail.type}
            </p>
            <p>
              <span>Fecha de la operación:</span> {detail.date}
            </p>

            {detail.totalQuota && (
              <p>
                <span>Cuota total: </span> {detail.totalQuota}
              </p>
            )}

            <p>
              <span>Monto:</span>
              <span className="history__amount history__amount--positive">
                ${detail.amount}
              </span>
            </p>

            {detail.games && (
              <>
                <h2>Partidos</h2>
                <ul className="games-list">
                  {detail.games.map((game) => {
                    return (
                      <li key={game.id}>
                        <details className="games-list__game">
                          <summary>
                            {game.title}
                            <div className="games-list__icon"></div>
                          </summary>
                          <div className="games-list__details">
                            <p>
                              <span>Competición:</span> {game.tournament}
                            </p>
                            <p>
                              <span>Jugada:</span> {game.option}
                            </p>
                            <p>
                              <span>Cuota parcial:</span> {game.partialQuota}
                            </p>
                            <p>
                              <span>Fecha del partido:</span> {game.date}
                            </p>
                          </div>
                        </details>
                      </li>
                    );
                  })}
                </ul>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowDetail;
