import Logo from "../../components/Logo";
import useCustomForm from "../../hooks/useCustomForm";
import * as yup from "yup";
import { Link } from "react-router-dom";
import authenticateUser from "src/services/authenticateUser";

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const Login = () => {
  const { register, handleSubmit, errors } = useCustomForm(schema);

  const onSubmit = (data) => {
    authenticateUser(data)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <div className="form">
        <div className="form__brand">
          <Logo />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form__input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="email" name="email" {...register("email")} />
            <small>{errors.email?.message}</small>
          </div>

          <div className="form__input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" {...register("password")} />
            <small>{errors.password?.message}</small>
          </div>

          <div className="form__input-group">
            <button type="submit" className="btn">
              Ingresar
            </button>
            {/* <span>
              <a href="">¿Olvidaste tu contraseña?</a>
            </span> */}
            <span>
              ¿Todavía no tenés una cuenta? &nbsp;
              <Link to="register" className="create-account">
                Creala acá
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Login;
