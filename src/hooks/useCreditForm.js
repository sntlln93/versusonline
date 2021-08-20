import { useEffect, useState } from "react";
import { useNotification } from "contexts/Notifications";
import creditSchema from "validations/creditSchema";

const useCreditForm = () => {
  const notification = useNotification();

  const [amount, setAmount] = useState(0);
  const [formattedAmount, setFormattedAmount] = useState("$ 0");
  const [phone, setPhone] = useState("");

  useEffect(() => {
    const options = { style: "currency", currency: "ARS" };
    const numberFormat = new Intl.NumberFormat("es-ES", options);
    setFormattedAmount(numberFormat.format(amount));
  }, [amount]);

  const handleKeyPress = (event, key) => {
    event.preventDefault();

    if (key === "0" || key === "00") {
      if (amount !== "0") {
        setAmount((prevState) => prevState + key);
      }
    } else {
      if (amount === "0") {
        setAmount("");
      }
      setAmount((prevState) => prevState + key);
    }
  };

  const handleDeleteKeyPress = (event) => {
    event.preventDefault();
    if (amount.length === 1) {
      setAmount("0");
    } else {
      setAmount((prevState) => prevState.slice(0, -1));
    }
  };

  const handlePhoneInput = (event) => {
    setPhone(event.target.value);
  };

  const handleSubmit = (event, onSubmit) => {
    event.preventDefault();
    const body = { amount: amount, phone: phone };

    creditSchema
      .validate(body, { abortEarly: false })
      .then((validated) => onSubmit(validated))
      .catch((error) => {
        const errors = error.errors.map((err) => {
          return { message: err, type: "error" };
        });
        notification.add(errors);
      });
  };

  return {
    formattedAmount,
    phone,
    handleKeyPress,
    handleDeleteKeyPress,
    handlePhoneInput,
    handleSubmit,
  };
};

export default useCreditForm;
