import React from "react";
import "../styles/Login.css";
import loginImage from "../assets/loginImage.jpeg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import * as authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(ev.target));

    authService.login(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch(() => {
        navigate("/");
      });
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
          <input name="email" placeholder="Enter username..." type="email" />
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
