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
        <Header />;
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route
            path="/categoria/:categoriaId"
            element={<ItemListContainer />}
          />
          <Route path="/cart" element={<CartWidget />} />
          <Route path="/detalle" element={<ItemDetailContainer />} />
        </Routes>
        <ItemListContainer />
        <ItemDetailContainer />
      </BrowserRouter>
    </>
  );
};

export default App;
