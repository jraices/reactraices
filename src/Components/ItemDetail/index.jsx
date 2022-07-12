import React from "react";
import ItemCount from "../ItemCount";

export const ItemDetail = ({ dataDetail}) => {

  const onAdd = () => {
    console.log("Agregaste 1 elemento al carrito")
  }

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
            <ItemCount initial={1} stock={5} onAdd={onAdd} />
            </div>
          </div>  
    </div>
  )
};

export default ItemDetail;
