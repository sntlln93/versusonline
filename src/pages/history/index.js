import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Coupon from "components/Coupon";
import Credits from "./Credits";
import Details from "./Details";

const History = () => {
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
          <section className="history">
            <Credits />
            <Details />
          </section>

          <Coupon />
        </div>
      </main>
    </div>
  );
};

export default History;
