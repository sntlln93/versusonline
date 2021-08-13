import Header from "./Header";
import Carousel from "./Carousel";
import Guide from "./Guide";
import Rules from "./Rules";
import Footer from "./Footer";

const Landing = () => {
  return (
    <>
      <Header />
      <Carousel />

      <main>
        <Guide />
        <Rules />
      </main>

      <Footer />
    </>
  );
};

export default Landing;
