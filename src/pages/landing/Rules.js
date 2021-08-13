import { Button } from "../../components/Button";

const Rules = () => {
  return (
    <section className="rules" id="rules">
      <h1 className="rules__header">Términos y condiciones</h1>
      <p className="rules__copy">
        Utilizar esta plataforma implica que ha leído y acepta los términos y
        condiciones.
      </p>
      <Button linkTo="login.html" text="VER TERMINOS Y CONDICIONES" />
    </section>
  );
};

export default Rules;
