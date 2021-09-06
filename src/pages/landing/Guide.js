import guide1 from "assets/images/guide1.png";
import guide2 from "assets/images/guide2.png";
import guide3 from "assets/images/guide3.png";

const Guide = () => {
  return (
    <section className="guide" id="guide">
      <h1 className="guide__header">¿Cómo jugar?</h1>
      <div className="guide__steps">
        <div className="guide__steps-step">
          <div className="guide__steps-header">
            <div>1</div>
            <h2>Elegí la liga o copa que quieras</h2>
          </div>
          <div className="guide__steps-content">
            <img src={guide1} alt="" />
            <p>
              Elegí la liga o copa que quieras para ver todos los partidos
              disponibles.
            </p>
          </div>
        </div>

        <div className="guide__steps-step">
          <div className="guide__steps-header">
            <div>2</div>
            <h2>Buscá el partido que te interesa</h2>
          </div>
          <div className="guide__steps-content">
            <img src={guide2} alt="" />
            <p>
              Eligiendo una liga o copa vas a ver toda la oferta de partidos que
              tenemos para vos. Jugá eligiendo la opción que más te guste y se
              abrirá el cupón para que puedas completarlo.
            </p>
          </div>
        </div>

        <div className="guide__steps-step">
          <div className="guide__steps-header">
            <div>3</div>
            <h2>Poné tus créditos en juego y ¡listo!</h2>
          </div>
          <div className="guide__steps-content">
            <img src={guide3} alt="" />
            <p>
              ¡En el cupón vas a ver tus jugadas y la cuota final. Sólo te queda
              poner tus créditos en juego y ¡listo!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
