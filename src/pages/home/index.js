import Coupon from "components/Coupon";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Bets from "./Bets";
import { useAuth } from "hooks/useAuth";
import { Redirect } from "react-router-dom";

const Home = () => {
  const auth = useAuth();

  if (!auth.isAuthenticated()) {
    return <Redirect to="/" />;
  }

  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div className="content">
          <Bets />
          <Coupon />
        </div>
      </main>
    </div>
  );
};

export default Home;
