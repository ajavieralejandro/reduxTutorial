import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createStore, applyMiddleware } from "redux";
import allReducers from "./redux/store";
import { Provider } from "react-redux";
import thunk from "redux-thunk" ;

//The created store
const store = createStore(
  allReducers,applyMiddleware(thunk)
);
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);