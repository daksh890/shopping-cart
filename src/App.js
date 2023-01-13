import React, { useState } from "react";
import "./App.css";
import Header from "./components/header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/home";
import Cart from "./components/cart";

function App() {
  const [cart, setCart] = useState([]);

  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home cart={cart} setCart={setCart} />}
            exact
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} setCart={setCart} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
