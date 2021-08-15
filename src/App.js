import "./App.css";
import initFontAwesome from "./assets/fonts/fontawesome";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home";
import History from "./pages/history";
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
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/history">
              <History />
            </Route>
          </AuthProvider>
        </NotificationProvider>
      </Switch>
    </Router>
  );
}

export default App;
