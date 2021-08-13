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
