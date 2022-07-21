import style from "./item.module.css";
import React, { useContext } from "react";
import { Link, useParams } from "react-router-dom";

const Item = ({ info }) => {
  return (
    <Link to={`/item/${info.id}`} className={style.film}>
      <img src={info.image} alt="" />
      <p> {info.title} </p>
    </Link>
  );
};

export default Item;
