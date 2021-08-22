import { useState, useEffect } from "react";
const Bets = ({
  regions,
  tournaments,
  games,
  selectedRegionId,
  selectedTournamentId,
  handleChangeRegion,
  handleChangeTournament,
  selectedGames,
  handleAddToCoupon,
}) => {
  const [gamesToShow, setGamesToShow] = useState([]);

  const handleQuotaSelected = (game, option) => {
    const toBeAdded = {
      game: { ...game },
      selected: { ...option },
    };
    handleAddToCoupon(toBeAdded);
  };

  useEffect(() => {
    setGamesToShow(
      games.filter(
        (game) =>
          !selectedGames
            .map((selectedGame) => selectedGame.game.id)
            .includes(game.id)
      )
    );
  }, [selectedGames, games]);

  return (
    <section className="bets">
      <h2>Competencias</h2>

      <div className="leagues">
        {regions &&
          regions.map((region) => {
            return (
              <div
                onClick={() => handleChangeRegion(region.id)}
                key={region.id}
                className={
                  region.id === selectedRegionId
                    ? "leagues__league leagues__league--selected"
                    : "leagues__league"
                }
              >
                <div>
                  <img src={region.logo} alt={region.name} />
                </div>
              </div>
            );
          })}
      </div>

      <div className="competitions">
        {tournaments &&
          tournaments
            .filter((tournament) => tournament.regionId === selectedRegionId)
            .map((tournament) => {
              return (
                <div
                  key={tournament.id}
                  onClick={() => handleChangeTournament(tournament.id)}
                  className={
                    tournament.id === selectedTournamentId
                      ? "competitions__competition competitions__competition--selected"
                      : "competitions__competition"
                  }
                >
                  <div>{tournament.name}</div>
                </div>
              );
            })}
      </div>

      <div className="games">
        <h2>Próximos partidos</h2>
        {gamesToShow &&
          gamesToShow.map((game) => {
            return (
              <div className="games__game" key={game.id}>
                <form action="">
                  <h3>{`${game.local.name} vs ${game.away.name}`}</h3>
                  <div className="game__date">{game.date}</div>
                  <div className="game__odds">
                    <div
                      className="game__odds-odd"
                      onClick={() => handleQuotaSelected(game, game.local)}
                    >
                      <span>{game.local.name}</span>
                      <span>{game.local.quota}</span>
                    </div>
                    <div
                      className="game__odds-odd"
                      onClick={() => handleQuotaSelected(game, game.tie)}
                    >
                      <span>{game.tie.name}</span>
                      <span>{game.tie.quota}</span>
                    </div>
                    <div
                      className="game__odds-odd"
                      onClick={() => handleQuotaSelected(game, game.away)}
                    >
                      <span>{game.away.name}</span>
                      <span>{game.away.quota}</span>
                    </div>
                  </div>
                </form>
              </div>
            );
          })}
      </div>
    </section>
  );
};

export default Bets;
