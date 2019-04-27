import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
import PrivateRoute from "../utils/PrivateRoute";
import NotFoundPage from "../pages/NotFoundPage";
import LogoutPage from "../pages/LogoutPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IndexPage} exact={true} />
        <Route path="/signup" component={SignUpPage} />
        <PrivateRoute path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/logout" component={LogoutPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
