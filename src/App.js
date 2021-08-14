import "./App.css";
import initFontAwesome from "./assets/fonts/fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import Home from "./pages/home";
import Register from "./pages/auth/Register";
import { AuthProvider } from "hooks/useAuth";
import { NotificationProvider } from "hooks/useNotification";

initFontAwesome();

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Landing />
        </Route>
        <NotificationProvider>
          <AuthProvider>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            {/*<Route path="/">
          <Home />
        </Route> */}
          </AuthProvider>
        </NotificationProvider>
      </Switch>
    </Router>
  );
}

export default App;
