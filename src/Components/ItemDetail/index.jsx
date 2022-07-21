import React, { useState } from "react";
import { useCartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount";

export const ItemDetail = ({ dataDetail }) => {
  const [goToCart, setGoToCart] = useState(false);

  const { addProduct } = useCartContext();

  const onAdd = (quantity) => {
    setGoToCart(true);

    addProduct(dataDetail, quantity);
  };

  return (
    <div>
      <div className="container">
        <div className="detail">
          <div className="content">
            <p>{dataDetail.title} </p>
            <p>{dataDetail.category}</p>
          </div>
          <img className="detail__image" src={dataDetail.image} alt="" />
        </div>
        <div>
          {goToCart ? (
            <Link to="/cart"> Terminar compra</Link>
          ) : (
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
