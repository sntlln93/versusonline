import { Link } from "react-router-dom";

export const ButtonLink = ({ classStyle, linkTo, text }) => {
  return (
    <Link className={`btn ${classStyle || ""}`} to={linkTo}>
      {text}
    </Link>
  );
};

export const Button = ({ classStyle, text, handleClick }) => {
  return (
    <button className={`btn ${classStyle || ""}`} onClick={handleClick}>
      {text}
    </button>
  );
};

export const IconButton = ({ icon, handleClick, style, text }) => {
  return (
    <button
      className="btn"
      style={{
        textTransform: "none",
        padding: ".5em",
        borderRadius: "5px",
        color: "white",
        backgroundColor: "var(--info-color)",
        ...style,
      }}
      onClick={handleClick}
    >
      {text}
      {icon}
    </button>
  );
};
