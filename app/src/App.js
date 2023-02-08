import "./App.css";

import { Route, Routes } from "react-router-dom";
import { catalogItemContext } from "./context/catalogItemContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalog" exact element={<Catalog />} />
        <Route path="/login" exact element={<Login />} />
        <Route path="/register" exact element={<Register />} />
        <Route path="/details:id" exact element={<Details />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
