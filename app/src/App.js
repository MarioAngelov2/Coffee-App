import "./App.css";

import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { useState } from "react";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import About from "./pages/About";
import Logout from "./components/Logout";

function App() {

  const [auth, setAuth] = useState({})

  const userLogin = (authData) => {
    setAuth(authData)
  }

  const userLogout = () => {
    setAuth({});
  }

  return (
    <AuthContext.Provider value={{user: auth, userLogin, userLogout}}>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/catalog" exact element={<Catalog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/logout" exact element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
