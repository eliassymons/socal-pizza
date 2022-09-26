import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Cart from "./components/Cart";
import { HashRouter, Routes, Route } from "react-router-dom";
import React from "react";

function App() {
  const [cartTotal, setCartTotal] = React.useState([]);

  function handleClick(e) {
    const value = Number(e.target.value);

    setCartTotal((prevItems) => {
      return [...prevItems, value];
    });
  }

  function remove(e) {
    e.preventDefault();
    setCartTotal([]);
  }

  let sum = cartTotal.reduce(function (a, b) {
    return a + b;
  }, 0);
  return (
    <div className="App">
      <HashRouter>
        <Header cartTotal={cartTotal} />
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route
            path="/menu"
            element={
              <Menu cartTotal={cartTotal} handleClick={handleClick} sum={sum} />
            }
          />
          <Route
            path="/cart"
            element={<Cart sum={sum} cartTotal={cartTotal} remove={remove} />}
          />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
