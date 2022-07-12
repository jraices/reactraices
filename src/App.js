import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItemDetailContainer from "./Components/ItemDetailContainer";

import ItemListContainer from "./Components/ItemListContainer";

import Header from "./Components/Header/Header";
import CartWidget from "./Components/CartWidget";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/item/:id"  element={<ItemDetailContainer />} />
          <Route path="/cart" element={<CartWidget />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
