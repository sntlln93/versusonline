export const ButtonLink = ({ classStyle, linkTo, text }) => {
  return (
    <a className={`btn ${classStyle || ""}`} href={linkTo || ""}>
      {text}
    </a>
  );
};

export const Button = ({ classStyle, text, handleClick }) => {
  return (
    <button className={`btn ${classStyle || ""}`} onClick={handleClick}>
      {text}
    </button>
  );
};
