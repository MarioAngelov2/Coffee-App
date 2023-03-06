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

import { catalogList } from "./helpers/catalogList";


function App() {

  const [coffeInfo, setCoffeInfo] = useState(catalogList);

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
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog coffeInfo={coffeInfo} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id" element={<Details coffeInfo={coffeInfo}/>} />
          <Route path="/about" element={<About />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
