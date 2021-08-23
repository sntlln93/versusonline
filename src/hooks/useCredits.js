import { useState, useEffect } from "react";
import fetcher from "services/fetcher";

const useCredits = () => {
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    fetcher
      .get("/credits")
      .then((response) => {
        setCredits(response.data.availableCredits);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return {
    credits,
  };
};

export default useCredits;
