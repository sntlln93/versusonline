import { useState, useEffect } from "react";
import fetcher from "services/fetcher";
import { useNotification } from "contexts/Notifications";

const useCoupon = () => {
  const notification = useNotification();

  const [profit, setProfit] = useState(0);
  const [totalQuota, setTotalQuota] = useState(0);
  const [amount, setAmount] = useState(0);
  const [selectedGames, setSelectedGames] = useState([]);

  useEffect(() => {
    const bets = localStorage.getItem("selectedGames");
    setSelectedGames(JSON.parse(bets) || []);
  }, []);

  useEffect(() => {
    selectedGames &&
      setTotalQuota(
        selectedGames
          .reduce((accumulator, currentValue) => {
            return accumulator * currentValue.selected.quota.replace(",", ".");
          }, 1)
          .toFixed(2)
      );
  }, [selectedGames, totalQuota, amount]);

  useEffect(() => {
    setProfit((totalQuota * amount).toFixed(2));
  }, [totalQuota, amount]);

  const handleAddToCoupon = (bet) => {
    const toBeAdded = JSON.parse(localStorage.getItem("selectedGames")) || [];
    toBeAdded.push(bet);
    setSelectedGames(selectedGames.concat(bet));
    localStorage.setItem("selectedGames", JSON.stringify(toBeAdded));
  };

  const handleRemoveFromCoupon = (gameId) => {
    const toBeFiltered =
      JSON.parse(localStorage.getItem("selectedGames")) || [];
    const filtered = toBeFiltered.filter((bet) => bet.game.id !== gameId);
    setSelectedGames(filtered);
    localStorage.setItem("selectedGames", JSON.stringify(filtered));
  };

  const handleChangeAmount = (event) => {
    setAmount(Number(event.target.value));
  };

  const handleBet = () => {
    const bet = {
      amount: amount,
      quotasId: selectedGames.map((game) => game.selected.quotaId),
    };

    fetcher
      .post(`bets`, bet)
      .then((response) => {
        notification.add([{ message: response.data.message, type: "success" }]);
        setSelectedGames([]);
        localStorage.removeItem("selectedGames");
      })
      .catch((error) => {
        console.log(error);
        notification.add([
          { message: error.response.data.message, type: "error" },
        ]);
      });
  };

  return {
    selectedGames,
    profit,
    totalQuota,
    amount,
    handleChangeAmount,
    handleAddToCoupon,
    handleRemoveFromCoupon,
    handleBet,
  };
};

export default useCoupon;
