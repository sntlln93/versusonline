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
  },
});

const creditSchema = yup.object().shape({
  amount: yup.number().min(50).label("monto"),
  phone: yup.string().length(10).label("número de teléfono"),
});

export default creditSchema;
