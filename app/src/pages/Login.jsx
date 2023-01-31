import React from "react";
import "../styles/Login.css";

function Login() {
  return (
    <div className="loginContainer">
      <div className="leftSide"></div>
      <div className="rightSide">
        <h1>Login</h1>
        <form id="login-form" method="POST">
          <label htmlFor="username">Username</label>
          <input name="username" placeholder="Enter username..." type="email" />
          <label htmlFor="password">Password</label>
          <input
            name="password"
            placeholder="Enter your password..."
            type="password"
          />
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
