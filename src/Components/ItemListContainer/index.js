import React, { useState, useEffect } from "react";
import Title from "../Title";
import ItemCount from "../ItemCount";
import ItemList from "../ItemList";
import { useInsertionEffect } from "react";

const films = [
  {
    id: 1,
    image: "https://proyecto101.com/wp-content/uploads/2019/08/i7_2.jpg",
    title: "Auricular i7",
  },
  {
    id: 1,
    image: "https://cf.shopee.com.ar/file/77bd0e4f651e7dbd7ec5582f28a764e4",
    title: "Auricular i7 negro",
  },
  {
    id: 1,
    image:
      "https://nissei.com/media/catalog/product/cache/16a9529cefd63504739dab4fc3414065/7/5/75498_1.jpg",
    title: "Auricular i7 rosa",
  },
];

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });

    getData.then((res) => setData(res));
  }, []);

  const onAdd = (quantity) => {
    console.log(`Compraste ${quantity} `);
  };

  return (
    <>
      <Title greeting="TIENDA DE ELECTRONICA" />
      <ItemCount initial={1} stock={5} onAdd={onAdd} />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
