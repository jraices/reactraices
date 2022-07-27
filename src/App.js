import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./Components/ItemDetailContainer";

import ItemListContainer from "./Components/ItemListContainer";
import Cart from "./Components/Cart";
import Header from "./Components/Header/Header";
import CartWidget from "./Components/CartWidget";
import CartProvider from "./context/CartContext";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Header />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/categoria/:categoriaId"
              element={<ItemListContainer />}
            />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/cart" element={<Cart/>} />
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;
