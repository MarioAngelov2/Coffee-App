import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import About from "./pages/About";


import { useState } from "react";
import { catalogItemContext } from "./context/catalogItemContext";

function App() {

  

  return (
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/catalog" exact element={<Catalog />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/register" exact element={<Register />} />
          <Route path="/details/:id" exact element={<Details />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
