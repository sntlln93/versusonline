import Logo from "components/Logo";
import useCustomForm from "hooks/useCustomForm";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";
import loginSchema from "validations/loginSchema";

const Login = () => {
  const { register, handleSubmit, errors } = useCustomForm(loginSchema);
  const auth = useAuth();

  if (auth.getUser()) {
    return <Redirect to="/home" />;
  }

  const onSubmit = (data) => auth.login(data);
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
