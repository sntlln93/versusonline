import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faBackspace } from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const hints = {
  phone:
    "Un número de teléfono válido tiene 10 dígitos: 2, 3 o 4 para el código de área y 8, 7, 6 respectivamente para el número.",
};

const CreditModal = (form) => {
  const modalBg = useRef(null);
  const [step, setStep] = useState(1);

  const handleContinue = (event) => {
    event.preventDefault();
    setStep(2);
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleCloseFromBackground = (event) => {
    if (event.target === modalBg.current) {
      form.handleClose();
    }
  };

  const handleDismiss = (event) => {
    event.preventDefault();
    form.handleClose();
  };

  return (
    <div className="modal-bg" onClick={handleCloseFromBackground} ref={modalBg}>
      <div className="modal">
        <div className="modal__header">
          <h2>
            {step === 2 && (
              <FontAwesomeIcon
                onClick={handleBack}
                size="xs"
                icon={faArrowLeft}
              />
            )}
            {form.title}
          </h2>
          <span onClick={handleDismiss} className="modal__close">
            &times;
          </span>
        </div>
        <div className="modal__content">
          <form className="stepper" onSubmit={form.handleSubmit}>
            {step === 1 ? (
              <div className="stepper__step">
                <h3>{form.header}</h3>
                {/* <h3>¿Cuánto querés retirar?</h3> */}

                <div className="form__input-group">
                  <input type="text" value={form.formattedAmount} disabled />
                </div>
                <div className="form__input-group">
                  <div className="keyboard">
                    <div className="keyboard__row">
                      <button
                        onClick={(event) => form.handleKeyPress(event, "1")}
                        className="keyboard__row-key"
                      >
                        1
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "2")}
                        className="keyboard__row-key"
                      >
                        2
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "3")}
                        className="keyboard__row-key"
                      >
                        3
                      </button>
                    </div>
                    <div className="keyboard__row">
                      <button
                        onClick={(event) => form.handleKeyPress(event, "4")}
                        className="keyboard__row-key"
                      >
                        4
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "5")}
                        className="keyboard__row-key"
                      >
                        5
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "6")}
                        className="keyboard__row-key"
                      >
                        6
                      </button>
                    </div>
                    <div className="keyboard__row">
                      <button
                        onClick={(event) => form.handleKeyPress(event, "7")}
                        className="keyboard__row-key"
                      >
                        7
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "8")}
                        className="keyboard__row-key"
                      >
                        8
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "9")}
                        className="keyboard__row-key"
                      >
                        9
                      </button>
                    </div>
                    <div className="keyboard__row">
                      <button
                        onClick={(event) => form.handleKeyPress(event, "00")}
                        className="keyboard__row-key"
                      >
                        00
                      </button>
                      <button
                        onClick={(event) => form.handleKeyPress(event, "0")}
                        className="keyboard__row-key"
                      >
                        0
                      </button>
                      <button
                        onClick={form.handleDeleteKeyPress}
                        className="keyboard__row-key"
                      >
                        <FontAwesomeIcon icon={faBackspace} />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="form__input-group">
                  <button className="btn" onClick={handleContinue}>
                    Continuar
                  </button>
                  <button onClick={handleDismiss} className="btn btn--dismiss">
                    Cancelar
                  </button>
                </div>
              </div>
            ) : (
              <div className="stepper__step">
                <h2>Colocá tu número de teléfono</h2>
                <p>Usaremos este dato para contactarte</p>

                <div className="form__input-group">
                  <div
                    className="form__input-group form__input-group--with-tooltip"
                    data-tooltip={hints.phone}
                    autoComplete="off"
                  >
                    <label htmlFor="phone">Número de teléfono</label>
                    <input
                      title={hints.phone}
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={form.handlePhoneInput}
                    />
                    <small>{""}</small>
                  </div>
                </div>

                <div className="form__input-group">
                  <button className="btn" type="submit">
                    Confirmar
                  </button>
                  <button onClick={handleDismiss} className="btn btn--dismiss">
                    Cancelar
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreditModal;
