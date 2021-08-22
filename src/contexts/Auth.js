import { useState, useEffect, useContext, createContext } from "react";
import { useNotification } from "contexts/Notifications";
import { useHistory } from "react-router-dom";
import fetcher from "services/fetcher";

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
    fetcher
      .post("login", data)
      .then((response) => storeUser(response))
      .catch((error) => {
        const message =
          error.response.status >= 500
            ? "Algo salió mal"
            : error.response.data.message;

        notification.add([
          {
            message: message,
            type: "error",
          },
        ]);
      });
  };

  const signup = (data) => {
    fetcher
      .post("register", data)
      .then((response) => {
        storeUser(response);
        notification.add([
          {
            message: `¡Bienvenido, ${response.data.name}`,
            type: "success",
          },
        ]);
      })
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
    fetcher
      .delete("logout")
      .then((response) => {
        if (response.status === 202) {
          setUser(null);
          localStorage.clear();
          history.push("/login");
        }
        notification.add([{ message: response.data.message, type: "success" }]);
      })
      .catch((error) => console.log(error.response.data.message));
  };

  const isAuthenticated = () => {
    return localStorage.getItem("user") ? true : false;
  };

  return { user, login, signup, signout, isAuthenticated };
};
