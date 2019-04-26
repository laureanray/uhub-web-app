import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import IndexPage from "../pages/IndexPage";
import SignUpPage from "../pages/SignUpPage";
import DashboardPage from "../pages/DashboardPage";
import LoginPage from "../pages/LoginPage";
const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/" component={IndexPage} exact={true} />
        <Route path="/signup" component={SignUpPage} />
        <Route path="/dashboard" component={DashboardPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
