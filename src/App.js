import "./App.css";
import initFontAwesome from "./assets/fonts/fontawesome";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import { AuthProvider } from "contexts/Auth";
import { NotificationProvider } from "contexts/Notifications";

import Landing from "./pages/landing";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Home from "./pages/home";
import History from "./pages/history";
import Trophies from "./pages/trophies";

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
            <ProtectedRoute exact path="/home">
              <Home />
            </ProtectedRoute>
            <ProtectedRoute exact path="/history">
              <History />
            </ProtectedRoute>
            <ProtectedRoute exact path="/trophies">
              <Trophies />
            </ProtectedRoute>
          </AuthProvider>
        </NotificationProvider>
      </Switch>
    </Router>
  );
}

export default App;
