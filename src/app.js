import React from "react";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import ReactDOM from "react-dom";
import BrowserRouter from "react-router-dom";
import Approuter, { history } from "./routers/Approuter";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import configureStore from "./store/configureStore";

import { login, logout } from "./actions/auth";

import "react-dates/lib/css/_datepicker.css";
import { firebase } from "./firebase/firebase";
import LoadingPage from "./components/LoadingPage";

const store = configureStore();
console.log("hai");
const jsx = (
  <Provider store={store}>
    <Approuter />
  </Provider>
);
let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
};
ReactDOM.render(<LoadingPage />, document.getElementById("app"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    console.log(user.uid);
    renderApp();
    if (history.location.pathname === "/") {
      history.push("/dashboard");
    }
  } else {
    store.dispatch(logout());
    console.log("logout");
    renderApp();
    history.push("/");
  }
});
