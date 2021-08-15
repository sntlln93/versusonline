import { useState, useEffect } from "react";
import fetcher from "services/fetcher";

const useCompetitions = () => {
  const [regions, setRegions] = useState([]);
  const [tournaments, setTournaments] = useState([]);
  const [selectedRegionId, setSelectedRegionId] = useState(null);
  const [selectedTournamentId, setSelectedTournamentId] = useState(null);
  const [games, setGames] = useState([]);

  useEffect(() => {
    fetcher
      .get("/competitions")
      .then((response) => {
        setRegions(response.data.regions);
        setSelectedRegionId(response.data.regions[0].id);
        setTournaments(response.data.tournaments);
        setSelectedTournamentId(response.data.tournaments[0].id);
        setGames(response.data.games);
      })
      .catch((error) => console.error(error));
  }, []);

  const handleChangeRegion = (regionId) => {
    setSelectedRegionId(regionId);
    setSelectedTournamentId(
      tournaments.find((tournament, index) => tournament.regionId === regionId)
        .id
    );
  };

  const handleChangeTournament = (tournamentId) => {
    setSelectedTournamentId(tournamentId);
  };

  return [
    regions,
    tournaments,
    games,
    selectedRegionId,
    selectedTournamentId,
    handleChangeRegion,
    handleChangeTournament,
  ];
};

export default useCompetitions;
