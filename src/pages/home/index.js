import Coupon from "components/Coupon";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Bets from "./Bets";

import useCompetitions from "hooks/useCompetitions";
import useCoupon from "hooks/useCoupon";

const Home = () => {
  const {
    regions,
    tournaments,
    games,
    selectedRegionId,
    selectedTournamentId,
    handleChangeRegion,
    handleChangeTournament,
  } = useCompetitions();

  const {
    selectedGames,
    totalQuota,
    amount,
    profit,
    handleAddToCoupon,
    handleRemoveFromCoupon,
    handleChangeAmount,
    handleBet,
  } = useCoupon();

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div className="content">
          <Bets
            regions={regions}
            tournaments={tournaments}
            games={games}
            selectedRegionId={selectedRegionId}
            selectedTournamentId={selectedTournamentId}
            handleChangeRegion={handleChangeRegion}
            handleChangeTournament={handleChangeTournament}
            selectedGames={selectedGames}
            handleAddToCoupon={handleAddToCoupon}
          />
          <Coupon
            selectedGames={selectedGames}
            totalQuota={totalQuota}
            amount={amount}
            profit={profit}
            handleRemoveFromCoupon={handleRemoveFromCoupon}
            handleChangeAmount={handleChangeAmount}
            handleBet={handleBet}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
