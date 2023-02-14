import React from "react";
import "../styles/Login.css";
import loginImage from "../assets/loginImage.jpeg";
import { login } from "../services/authService";

function Login() {
  const onSubmit = (ev) => {
    ev.preventDefault();

    const { username, password } = Object.fromEntries(new FormData(ev.target));

    login(username, password).then((authData) => {
      console.log(authData);
    })
      .catch(() => {
        
      })
  };

  return (
    <div className="loginContainer">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${loginImage})` }}
      ></div>
      <div className="rightSide">
        <h1>Login</h1>
        <form id="login-form" method="POST" onSubmit={onSubmit}>
          <label htmlFor="username">Username:</label>
          <input name="username" placeholder="Enter username..." type="email" />
          <label htmlFor="password">Password:</label>
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
