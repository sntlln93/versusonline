import { useState, useEffect, useContext, createContext } from "react";
import { useNotification } from "hooks/useNotification";
import axios from "axios";
import { useHistory } from "react-router-dom";

const URL = process.env.REACT_APP_API_URL;
const authContext = createContext();

export function AuthProvider({ children }) {
  const auth = useAuthProvider();
  return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
  return useContext(authContext);
};

const useAuthProvider = () => {
  const [user, setUser] = useState(null);
  const notification = useNotification();
  let history = useHistory();

  const storeUser = (response) => {
    setUser(JSON.stringify(response.data));
    localStorage.setItem("user", JSON.stringify(response.data));
    history.push("/home");
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      setUser(JSON.parse(localStorage.getItem("user")));
    }
  }, []);

  const login = (data) => {
    axios
      .post(`${URL}/login`, data)
      .then((response) => storeUser(response))
      .catch((error) => {
        notification.add([
          {
            message: error.response.data.message,
            type: "error",
          },
        ]);
      });
  };

  const signup = (data) => {
    axios
      .post(`${URL}/register`, data)
      .then((response) => storeUser(response))
      .catch((error) => {
        const errors = Object.values(error.response.data.messages).map(
          (error) => {
            return { message: error[0], type: "error" };
          }
        );
        notification.add(errors);
      });
  };

  const signout = () => {
    setUser(null);
    localStorage.removeItem("user");
    history.push("/");
  };

  const isAuthenticated = () => {
    return localStorage.getItem("user") ? true : false;
  };

  return { user, login, signup, signout, isAuthenticated };
};
