import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { setLocale } from "yup";

setLocale({
  mixed: {
    required: "Este campo es obligatorio",
  },
  string: {
    email: "Ingresá un email válido",
  },
});

const useCustomForm = (schema) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return {
    register,
    handleSubmit,
    errors,
  };
};

export default useCustomForm;
