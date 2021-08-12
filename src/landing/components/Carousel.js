import { ButtonLink } from "../../assets/components/Button";
import useSlider from "../hooks/useSlider";

const images = [
  "https://picsum.photos/id/135/600/300",
  "https://picsum.photos/id/136/600/300",
  "https://picsum.photos/id/137/600/300",
];

const Carousel = () => {
  const { activeSlide, moveToSlide, track } = useSlider();

  return (
    <section className="carousel">
      <div className="carousel__track-container">
        <ul className="carousel__track" ref={track}>
          <li
            className={`carousel__slide  ${
              activeSlide === 0 ? "carousel__slide--active" : ""
            }`}
          >
            <img className="carousel__image" src={images[0]} alt="" />
          </li>

          <li
            className={`carousel__slide  ${
              activeSlide === 1 ? "carousel__slide--active" : ""
            }`}
          >
            <img className="carousel__image" src={images[1]} alt="" />
          </li>

          <li
            className={`carousel__slide  ${
              activeSlide === 2 ? "carousel__slide--active" : ""
            }`}
          >
            <img className="carousel__image" src={images[2]} alt="" />
          </li>
        </ul>
      </div>
      <div className="carousel__content">
        <h1>El juego y el azar en un solo lugar</h1>
        <p>
          ¡Bienvenidos, amigos futboleros! Contáctanos para empezar a jugar y
          ser parte de la comunidad de Versus.
        </p>
        <ButtonLink linkTo="login.html" text="Accede ahora" />
      </div>

      <div className="carousel__nav">
        <button
          onClick={() => moveToSlide(0)}
          className={`carousel__indicator ${
            activeSlide === 0 ? "carousel__indicator--active" : ""
          }`}
        ></button>

        <button
          onClick={() => moveToSlide(1)}
          className={`carousel__indicator ${
            activeSlide === 1 ? "carousel__indicator--active" : ""
          }`}
        ></button>

        <button
          onClick={() => moveToSlide(2)}
          className={`carousel__indicator ${
            activeSlide === 2 ? "carousel__indicator--active" : ""
          }`}
        ></button>
      </div>
    </section>
  );
};

export default Carousel;
