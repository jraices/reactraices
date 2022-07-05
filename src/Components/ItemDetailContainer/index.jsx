import React, { useState, useEffect } from "react";
import ItemDetail from "../ItemDetail";

const films = {
  id: 1,
  image: "https://proyecto101.com/wp-content/uploads/2019/08/i7_2.jpg",
  title: "Auricular i7",
};

export const ItemDetailContainer = () => {
  const [data, setData] = useState({});

  useEffect(() => {
    const getData = new Promise((resolve) => {
      setTimeout(() => {
        resolve(films);
      }, 3000);
    });

    getData.then((res) => setData(res));
  }, []);

  return <ItemDetail data={data} />;
};

export default ItemDetailContainer;
