import AppRouter from "./components/routers/appRouter";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./components/stores/configureStore";
import { Provider } from "react-redux";
import "./styles/main.scss";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));
