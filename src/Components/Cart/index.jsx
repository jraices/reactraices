import React from "react";

import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext.jsx";
import ItemCart from "../ItemCart/Index.jsx";

const Cart = () => {
  const { cart, totalPrice } = useCartContext();

  if (cart.length === 0) {
    console.log("cart vacio")
    return (
      <>
        <p>No hay elementos en el carrito</p>

        <Link to="/">Hacer compras</Link>
      </>
    );
  }

  return (
    <>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      <p>
        total: {totalPrice()}
      </p>
    </>
  )
};

export default Cart;
