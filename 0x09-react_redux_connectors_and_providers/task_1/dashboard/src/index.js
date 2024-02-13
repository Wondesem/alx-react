import React from "react";
import ReactDOM from "react-dom";
import { creatStore } from 'redux';
import { Provider } from 'react-redux';
import App from "./App/App";
import uiReducer, { initialState } from './reducers/uiReducer';
import { Map } from "immutable";

const store = creatStore(uiReducer, Map(initialState));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} >
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
