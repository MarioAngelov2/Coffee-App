import React from "react";
import "../styles/Register.css";

import * as authService from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function Register() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const form = ev.target;
    const formData = new FormData(form);
    const email = formData.get("email");
    const password = formData.get("password");
    const repeatPass = formData.get("re-password");

    if (password !== repeatPass) {
      alert("Password don't match");
    }

    authService.register(email, password).then((authData) => {
      userLogin(authData);
      navigate("/");
    });
  };

  return (
    <div className="register">
      <h1>Register</h1>
      <form id="register-form" method="POST" onSubmit={onSubmit}>
        <label htmlFor="username">Username:</label>
        <input name="email" placeholder="Enter username..." type="email" />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          placeholder="Enter your password..."
          type="password"
        />
        <label htmlFor="re-password">Repeat Password:</label>
        <input
          name="re-password"
          placeholder="Repeat password..."
          type="password"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
}

export default Register;
