import { useState, useEffect } from "react";
import fetcher from "services/fetcher";

const useBets = () => {
  const [regions, setRegions] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [games, setGames] = useState([]);

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
        setGames(response.data);
      })
      .catch((error) => console.error(error));
  }, [selectedTournamentId]);

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
