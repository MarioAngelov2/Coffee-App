import React from "react";
import "../styles/Register.css";

function Register() {
  return (
    <div className="register">
      <h1>Register</h1>
        <form id="register-form" method="POST">
          <label htmlFor="username">Username:</label>
          <input name="username" placeholder="Enter username..." type="email" />
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
