import "./App.css";

import { Route, Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { ShopContextProvider } from "./context/AddToCartContext";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Details from "./pages/Details";
import About from "./pages/About";
import Logout from "./components/Logout";
import CreateCoffee from "./components/CreateItem";
import Cart from "./pages/Cart";
import { useLocalStorage } from "./hooks/useLocalStorage";

function App() {
  const [auth, setAuth] = useLocalStorage("auth", {});

  const userLogin = (authData) => {
    setAuth(authData);
  };

  const userLogout = () => {
    setAuth({});
  };

  return (
    <ShopContextProvider>
      <AuthContext.Provider value={{ user: auth, userLogin, userLogout }}>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<Catalog />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/create" element={<CreateCoffee />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
          <Footer />
        </div>
      </AuthContext.Provider>
    </ShopContextProvider>
  );
}

export default App;
