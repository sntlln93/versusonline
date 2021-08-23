import { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Coupon from "components/Coupon";
import Credits from "./Credits";
import Details from "./Details";
import { useAuth } from "contexts/Auth";
import fetcher from "services/fetcher";
import useCoupon from "hooks/useCoupon";

const History = () => {
  const [details, setDetails] = useState([]);
  const [shouldQueryAgain, setShouldQueryAgain] = useState(false);
  const auth = useAuth();

  const {
    selectedGames,
    totalQuota,
    amount,
    profit,
    handleRemoveFromCoupon,
    handleChangeAmount,
    handleBet,
  } = useCoupon();

  useEffect(() => {
    fetcher
      .get("history", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${auth.getUser().token}`,
        },
      })
      .then((response) => {
        const arr = Object.values(response.data);
        setDetails(arr);
      })
      .catch((error) => console.error(error));
  }, [shouldQueryAgain, auth]);

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div className="content">
          <section className="history">
            <Credits setRefresh={setShouldQueryAgain} />
            <Details details={details} />
          </section>
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

export default History;
