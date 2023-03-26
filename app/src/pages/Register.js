import React from "react";
import "../styles/Register.css";

import * as authService from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../theme/theme";

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
    console.log(repeatPass);

    if (password !== repeatPass) {
      alert("Password don't match");
    }

    authService.register(email, password).then((authData) => {
      userLogin(authData);
      navigate("/");
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="register">
        <Box
          component="form"
          autoComplete="off"
          className="registerBox"
          method="POST"
          onSubmit={onSubmit}
        >
          <Avatar className="avatar">
            <LockOutlinedIcon />
          </Avatar>
          <h1>Sign Up</h1>
          <TextField
            label="Email"
            type="email"
            className="email-input"
            inputProps={{ name: "email" }}
          />
          <TextField
            label="Password"
            type="password"
            className="password"
            inputProps={{ name: "password" }}
          />
          <TextField
            label="Repeat Password"
            type="password"
            className="re-password"
            inputProps={{ name: "re-password" }}
          />
          <Button className="registerBtn" variant="outlined" type="submit">
            Sign Up
          </Button>
          <span className="redirectSpanRegister" onClick={() => navigate('/login')}>Already have an account? Sign in</span>
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default Register;

// {
//   /* <div className="register">
//       <h1>Register</h1>
//       <form id="register-form" method="POST" onSubmit={onSubmit}>
//         <label htmlFor="username">Username:</label>
//         <input name="email" placeholder="Enter username..." type="email" />
//         <label htmlFor="password">Password:</label>
//         <input
//           name="password"
//           placeholder="Enter your password..."
//           type="password"
//         />
//         <label htmlFor="re-password">Repeat Password:</label>
//         <input
//           name="re-password"
//           placeholder="Repeat password..."
//           type="password"
//         />
//         <button type="submit">Register</button>
//       </form>
//     </div> */
// }
