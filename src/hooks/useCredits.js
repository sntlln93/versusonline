import { useAuth } from "contexts/Auth";
import { useState, useEffect } from "react";
import fetcher from "services/fetcher";

const useCredits = () => {
  const [credits, setCredits] = useState(0);
  const auth = useAuth();

  useEffect(() => {
    fetcher
      .get("/credits", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      })
      .then((response) => {
        setCredits(response.data.availableCredits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [auth]);

  return {
    credits,
  };
};

export default useCredits;
