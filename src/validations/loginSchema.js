import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "El campo ${path} es obligatorio", // eslint-disable-line
  },
  string: {
    email: "El ${path} debe ser un email válido", // eslint-disable-line
  },
});

const loginSchema = yup.object().shape({
  email: yup.string().email().label("email").required(),
  password: yup.string().label("contraseña").required(),
});

export default loginSchema;
