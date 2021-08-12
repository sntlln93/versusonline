import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Guide from "./components/Guide";
import Rules from "./components/Rules";
import Footer from "./components/Footer";

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
