import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";

import AppRouter from "./routers/AppRouter";
import "./styles/_base.sass";

const store = configureStore();

const AppRoot = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(AppRoot, document.getElementById("root"));
