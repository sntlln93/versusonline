import Logo from "components/Logo";
import useCustomForm from "hooks/useCustomForm";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";

const hints = {
  phone:
    "Un número de teléfono válido tiene 10 dígitos: 2, 3 o 4 para el código de área y 8, 7, 6 respectivamente para el número.",
};

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(8).required(),
  name: yup.string().required(),
  lastname: yup.string().required(),
  phone: yup.string().nullable(),
});

const Register = () => {
  const { register, handleSubmit, errors } = useCustomForm(schema);
  const auth = useAuth();

  if (auth.isAuthenticated()) {
    return <Redirect to="/home" />;
  }

  const onSubmit = (data) => auth.signup(data);

  return (
    <main>
      <div className="form">
        <div className="form__brand">
          <Logo />
        </div>

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form__input-group">
            <label htmlFor="email">Correo electrónico</label>
            <input type="text" name="email" {...register("email")} />
            <small>{errors.email?.message}</small>
          </div>

          <div className="form__input-group">
            <label htmlFor="name">Nombre</label>
            <input type="text" name="name" {...register("name")} />
            <small>{errors.name?.message}</small>
          </div>

          <div className="form__input-group">
            <label htmlFor="lastname">Apellido</label>
            <input type="text" name="lastname" {...register("lastname")} />
            <small>{errors.lastname?.message}</small>
          </div>

          <div className="form__input-group">
            <label htmlFor="password">Contraseña</label>
            <input type="password" name="password" {...register("password")} />
            <small>{errors.password?.message}</small>
          </div>

          <div className="form__input-group">
            <div
              className="form__input-group form__input-group--with-tooltip"
              data-tooltip={hints.phone}
              autoComplete="off"
            >
              <label htmlFor="phone">
                Número de teléfono <em>(opcional)</em>
              </label>
              <input
                title={hints.phone}
                type="tel"
                name="phone"
                {...register("phone")}
              />
              <small>{errors.phone?.message}</small>
            </div>
          </div>

          <div className="form__input-group">
            <button className="btn" type="submit">
              Registrar
            </button>
            <span>
              ¿Ya tenés una cuenta?&nbsp;
              <Link to="login" className="create-account">
                Ingresá desde acá
              </Link>
            </span>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Register;
