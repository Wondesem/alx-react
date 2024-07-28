import React from "react";
import logo from "./holberton_logo.png";
import { getFooterCopy, getFullYear } from "./utils";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full</p>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" placeholder="Enter your email" />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          placeholder="Enter your password"
        />
        <button type="submit">Ok</button>
      </div>
      <div className="App-footer">
        <p>
          &copy; {getFullYear()} - {getFooterCopy(true)}
        </p>
      </div>
    </div>
  );
};

export default App;
