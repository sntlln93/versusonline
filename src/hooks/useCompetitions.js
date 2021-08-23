import { useState, useEffect } from "react";
import { useAuth } from "contexts/Auth";
import fetcher from "services/fetcher";

const useBets = () => {
  const [regions, setRegions] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [games, setGames] = useState([]);
  const auth = useAuth();

  useEffect(() => {
    fetcher
      .get("/regions", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      })
      .then((response) => {
        setRegions(response.data);
        setSelectedRegionId(response.data[0].id);
      })
      .catch((error) => console.error(error));
  }, [auth]);

  useEffect(() => {
    fetcher
      .get(`regions/${selectedRegionId}/tournaments`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      })
      .then((response) => {
        if (response.data[0]) {
          setTournaments(response.data);
          setSelectedTournamentId(response.data[0].id);
        }
      })
      .catch((error) => console.error(error));
  }, [selectedRegionId, auth]);

  useEffect(() => {
    fetcher
      .get(`tournaments/${selectedTournamentId}/games`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getToken()}`,
        },
      })
      .then((response) => {
        setGames(response.data);
      })
      .catch((error) => console.error(error));
  }, [selectedTournamentId, auth]);

  const handleChangeRegion = (regionId) => {
    setSelectedRegionId(regionId);
  };

  const handleChangeTournament = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
  };

  return {
    regions,
    tournaments,
    games,
    selectedRegionId,
    selectedTournamentId,
    handleChangeRegion,
    handleChangeTournament,
  };
};

export default useBets;
