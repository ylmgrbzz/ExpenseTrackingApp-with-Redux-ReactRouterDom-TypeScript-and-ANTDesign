import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "antd/dist/reset.css";
import rootReducer from "./store";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
