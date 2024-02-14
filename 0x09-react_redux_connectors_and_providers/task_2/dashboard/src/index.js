import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import uiReducer, { initialState } from ".reducers/uiReducer";
import App from "./App/App";
import { Map } from "immutable";

const store = createStore(uiReducer, Map(initialStatee), applyMiddleware);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
