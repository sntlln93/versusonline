import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

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
