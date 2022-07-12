import React, { useState, useEffect } from "react";
import Title from "../Title";
import ItemList from "../ItemList";
import { useInsertionEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/database";



export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {

    if (categoriaId) {
      console.log("Data itemlist preset:", data)
      getData.then((res) => setData(res.filter((e) => e.category === categoriaId)));
      console.log("Data itemlist postset:", data)
    } else {
      getData.then((res) => setData(res));
    }
  }, [categoriaId]);

  return (
    <>
      <Title greeting="TIENDA DE ELECTRONICA" />
      <ItemList data={data} />
    </>
  );
};

export default ItemListContainer;
