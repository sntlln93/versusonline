import logo from "assets/images/logo.svg";
import { useHistory } from "react-router-dom";

const Logo = ({ classStyle }) => {
  const history = useHistory();

  return (
    <img
      src={logo}
      className={classStyle}
      alt="versus bet logo"
      onClick={() => history.push("/")}
    />
  );
};

export default Logo;
