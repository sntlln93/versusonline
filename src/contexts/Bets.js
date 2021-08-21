import { useState, useEffect, useContext, createContext } from "react";
import fetcher from "services/fetcher";
import { useNotification } from "contexts/Notifications";

const betsContext = createContext();

export function BetsProvider({ children }) {
  const bets = useBetsProvider();
  return <betsContext.Provider value={bets}>{children}</betsContext.Provider>;
}

export const useBets = () => {
  return useContext(betsContext);
};

const useBetsProvider = () => {
  const notification = useNotification();

  const [regions, setRegions] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [games, setGames] = useState([]);
  const [selectedGames, setSelectedGames] = useState([]);
  const [profit, setProfit] = useState(0);
  const [totalQuota, setTotalQuota] = useState(0);
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    fetcher
      .get("/regions")
      .then((response) => {
        setRegions(response.data);
        setSelectedRegionId(response.data[0].id);
      })
      .catch((error) => console.error(error));
  }, []);

  useEffect(() => {
    fetcher
      .get(`regions/${selectedRegionId}/tournaments`)
      .then((response) => {
        if (response.data[0]) {
          setTournaments(response.data);
          setSelectedTournamentId(response.data[0].id);
        }
      })
      .catch((error) => console.error(error));
  }, [selectedRegionId]);

  useEffect(() => {
    fetcher
      .get(`tournaments/${selectedTournamentId}/games`)
      .then((response) => {
        const bets = selectedGames.map((bet) => bet.game.id);
        setGames(response.data.filter((game) => !bets.includes(game.id)));
      })
      .catch((error) => console.error(error));
  }, [selectedTournamentId, selectedGames]);

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

  const handleChangeRegion = (regionId) => {
    setSelectedRegionId(regionId);
  };

  const handleChangeTournament = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
  };

  const handleAddToCoupon = (bet) => {
    setSelectedGames(selectedGames.concat(bet));
    setGames(games.filter((game) => game.id !== bet.game.id));
  };

  const handleRemoveFromCoupon = (gameId) => {
    const betToRemove = selectedGames.find((bet) => bet.game.id === gameId);
    setSelectedGames(selectedGames.filter((bet) => bet.game.id !== gameId));
    setGames(games.concat(betToRemove.game));
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
      })
      .catch((error) => {
        notification.add([
          { message: error.response.data.message, type: "error" },
        ]);
      });
  };

  return {
    regions,
    tournaments,
    games,
    selectedRegionId,
    selectedTournamentId,
    selectedGames,
    profit,
    totalQuota,
    amount,
    handleChangeAmount,
    handleChangeRegion,
    handleChangeTournament,
    handleAddToCoupon,
    handleRemoveFromCoupon,
    handleBet,
  };
};
