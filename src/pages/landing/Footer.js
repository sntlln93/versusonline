import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "components/Logo";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__section footer__section--xl">
        <Logo />
        <p className="footer__section-copy">
          Visitanos en nuestras redes sociales
        </p>
        <div className="footer__section-social">
          <div className="footer__section-btn">
            <a href="https://www.facebook.com/versusbet">
              <FontAwesomeIcon icon={["fab", "facebook-f"]} />
            </a>
          </div>
          <div className="footer__section-btn">
            <a href="https://www.facebook.com/versusbet">
              <FontAwesomeIcon icon={["fab", "twitter"]} />
            </a>
          </div>
          <div className="footer__section-btn">
            <a href="https://www.facebook.com/versusbet">
              <FontAwesomeIcon icon={["fab", "instagram"]} />
            </a>
          </div>
        </div>
      </div>

      <div className="footer__section">
        <h2>JUEGO RESPONSABLE</h2>
        <small>
          Juegue responsablemente y con moderación. No considere el juego una
          forma de hacer dinero y solo juegue con dinero que pueda permitirse
          perder. Lea más sobre el Juego Responsable. Si está preocupado por su
          juego o se siente afectado por el comportamiento de juego de otra
          persona, por favor, póngase en contacto con
          <a href="https://jugadoresanonimos.org.ar/"> Jugadores Anónimos </a>
          para más ayuda.
        </small>
        <br />
        <br />
        <p>
          <strong>Linea de ayuda: (011) 15 4412 6745</strong>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
