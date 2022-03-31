import * as yup from "yup";

yup.setLocale({
  mixed: {
    required: "El campo ${path} es obligatorio", // eslint-disable-line
  },
  number: {
    min: "El ${path} mínimo a ingresar son ${min} créditos", // eslint-disable-line
  },
  string: {
    length: "El ${path} debe tener ${length} dígitos", // eslint-disable-line
    min: "El campo ${path} debe tener al menos ${min} caracteres", // eslint-disable-line
    email: "El ${path} debe ser un email válido", // eslint-disable-line
  },
});

const registerSchema = yup.object().shape({
  email: yup.string().email().label("email").required(),
  password: yup.string().min(8).label("contraseña").required(),
  name: yup.string().label("nombre").required(),
  lastname: yup.string().label("apellido").required(),
  phone: yup.string().label("número de teléfono").required(),
});

export default registerSchema;
