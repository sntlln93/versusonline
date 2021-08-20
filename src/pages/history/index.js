import { useAuth } from "contexts/Auth";
import { Redirect } from "react-router-dom";
import { useState, useEffect } from "react";
import Sidebar from "components/Sidebar";
import Header from "components/Header";
import Coupon from "components/Coupon";
import Credits from "./Credits";
import Details from "./Details";
import fetcher from "services/fetcher";

const History = () => {
  const auth = useAuth();
  const [details, setDetails] = useState([]);
  const [shouldQueryAgain, setShouldQueryAgain] = useState(false);

  useEffect(() => {
    fetcher
      .get("history")
      .then((response) => {
        const arr = Object.values(response.data);
        console.log(arr);
        setDetails(arr);
      })
      .catch((error) => console.error(error));
  }, [shouldQueryAgain]);

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
            <Credits setRefresh={setShouldQueryAgain} />
            <Details details={details} />
          </section>

          <Coupon />
        </div>
      </main>
    </div>
  );
};

export default History;
