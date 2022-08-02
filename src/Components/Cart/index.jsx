import { addDoc, collection, getFirestore } from "firebase/firestore";
import Firestore from "firestore";
import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext.jsx";
import ItemCart from "../ItemCart/Index.jsx";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  const order = {
    buyer: {
      name: "Jonathan",
      email: "jonathan.raices@gmail.com",
      phone: "1531989076",
      adress: "Mercedes 4542",
    },

    items: cart.map((product) => ({
      id: product.id,
      title: product.title,
      price: product.price,
      quantity: product.quantity,
    })),

    total: totalPrice(),
  };

  const handleClick = () => {
    const db = getFirestore();
    const ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, order).then(({ id }) => console.log(id));
  };

  if (cart.length === 0) {
    console.log("cart vacio");
    return (
      <>
        <p>No hay elementos en el carrito</p>

        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {cart.map((product) => (
        <ItemCart key={product.id} product={product} />
      ))}
      <p>total: {totalPrice()}</p>
      <button onClick={handleClick}>Emitir compra</button>
    </>
  );
};

export default Cart;
