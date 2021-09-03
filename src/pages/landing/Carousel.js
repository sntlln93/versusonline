import { ButtonLink } from "components/Button";
import useSlider from "hooks/useSlider";
import img1 from "assets/images/1.jpg";
import img2 from "assets/images/2.jpg";
import img3 from "assets/images/3.jpg";
import img4 from "assets/images/4.jpg";

const images = [img1, img2, img3, img4];

const Carousel = () => {
  const { activeSlide, track } = useSlider();
  return (
    <section className="carousel">
      <div className="carousel__track-container">
        <ul className="carousel__track" ref={track}>
          {images.map((image, index) => (
            <li
              key={index}
              className={`carousel__slide  ${
                activeSlide === index ? "carousel__slide--active" : ""
              }`}
            >
              <img className="carousel__image" src={image} alt="" />
            </li>
          ))}
        </ul>
      </div>
      <div className="carousel__content">
        <h1>El juego y el azar en un solo lugar</h1>
        <p>
          ¡Bienvenidos, amigos futboleros! Contáctanos para empezar a jugar y
          ser parte de la comunidad de Versus.
        </p>
        <ButtonLink linkTo="login" text="Accede ahora" />
      </div>

      <div className="carousel__nav">
        {images.map((image, index) => (
          <button
            key={index}
            className={`carousel__indicator ${
              activeSlide === index ? "carousel__indicator--active" : ""
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default Carousel;
