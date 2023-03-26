import React, { useState } from "react";
import "../styles/Login.css";
import loginImage from "../assets/loginImage.jpeg";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import LoginIcon from "@mui/icons-material/Login";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

import * as authService from "../services/authService";
import { AuthContext } from "../context/AuthContext";

function Login() {
  const { userLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (ev) => {
    ev.preventDefault();

    const { email, password } = Object.fromEntries(new FormData(ev.target));

    authService
      .login(email, password)
      .then((authData) => {
        userLogin(authData);
        navigate("/");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="loginBox"
        component="form"
        noValidate
        autoComplete="off"
        onSubmit={onSubmit}
      >
        <div className="loginContainer">
          <div
            className="leftSide"
            style={{ backgroundImage: `url(${loginImage})` }}
          ></div>
          <div className="rightSide">
            <Avatar className="avatar">
              <LockOutlinedIcon />
            </Avatar>
            <h1>Login</h1>
            <TextField
              label="Email"
              type="email"
              inputProps={{ name: "email" }}
              className="email-input"
            />
            <TextField
              label="Password"
              type="password"
              inputProps={{ name: "password" }}
              className="password-input"
            />
            <Button
              className="login-btn"
              type="submit"
              variant="outlined"
              startIcon={<LoginIcon />}
            >
              Login
            </Button>
          </div>
        </div>
      </Box>
    </ThemeProvider>
  );
}

export default Login;

// return (
//   <div className="loginContainer">
//     <div
//       className="leftSide"
//       style={{ backgroundImage: `url(${loginImage})` }}
//     ></div>
//     <div className="rightSide">
//       <h1>Login</h1>
//       <form id="login-form" method="POST" onSubmit={onSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input name="email" placeholder="Enter username..." type="email" />
//         <label htmlFor="password">Password:</label>
//         <input
//           name="password"
//           placeholder="Enter your password..."
//           type="password"
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   </div>
// );
// }
