import React from "react";
import DashBoardPage from "../components/DashBoardPage";
import Header from "../components/Header";
import NotFoundPage from "../components/NotFoundPage";
import LoginPage from "../components/Login";
import createHistory from "history/createBrowserHistory";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute";
import {
  Router,
  Route,
  Switch,
  Link,
  browserHistory,
  NavLink
} from "react-router-dom";

export const history = createHistory();
const Approuter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <PublicRoute path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={DashBoardPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);
export default Approuter;
