import React from "react";
import "./Login.css"
const Login = () => {
  return (
    <div className="App-body">
      <p>Login to access the full</p>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" placeholder="Enter your email" />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" placeholder="Enter your password" />
      <button type="submit">Ok</button>
    </div>
  );
};

export default Login;
