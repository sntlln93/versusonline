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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              beatae quod corporis, possimus obcaecati nisi voluptatem vero
              vitae ipsa iure quam quaerat, ullam alias repudiandae soluta odio
              adipisci voluptates rem.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              beatae quod corporis, possimus obcaecati nisi voluptatem vero
              vitae ipsa iure quam quaerat, ullam alias repudiandae soluta odio
              adipisci voluptates rem.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              beatae quod corporis, possimus obcaecati nisi voluptatem vero
              vitae ipsa iure quam quaerat, ullam alias repudiandae soluta odio
              adipisci voluptates rem.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guide;
