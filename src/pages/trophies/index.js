import Sidebar from "components/Sidebar";
import Header from "components/Header";

const Trophy = ({ content, image, title }) => {
  const styles = {
    card: {
      backgroundColor: "var(--secondary-color-alt)",
      margin: "auto",
      border: "1px solid var(--transparent-border-color)",
      padding: "2em",
      borderRadius: "var(--border-radius)",
      width: "100%",
      textAlign: "center",
    },
    img: {
      width: "100%",
    },
  };
  return (
    <div style={styles.card}>
      {/* <img style={styles.img} src={image} /> */}
      {/* <h4>{title}</h4> */}
      <p>{content}</p>
    </div>
  );
};

const Trophies = () => {
  const styles = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gridGap: "1em",
    paddingInline: "1em",
  };
  return (
    <div className="dashboard">
      <Sidebar />
      <main>
        <Header />
        <div style={styles}>
          <Trophy
            title="Trotamundos"
            content="Todavía no tenés logros"
            image="https://placeholder.pics/svg/300/2C1E27-1F171D"
          />
        </div>
      </main>
    </div>
  );
};

export default Trophies;
