import "./App.css";

import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/catalog" exact element={<Catalog />} />
        <Route path="/login" exact element={<Login />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
