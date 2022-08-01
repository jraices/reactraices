import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";
import Title from "../Title";
import ItemList from "../ItemList";
import { useInsertionEffect } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../../api/database";

export const ItemListContainer = () => {
  const [data, setData] = useState([]);

  const { categoriaId } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryCollection = collection(querydb, "products");

    if (categoriaId) {
      const queryFilter = query(
        queryCollection,
        where("category", "==", categoriaId)
      );
      getDocs(queryFilter).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
    } else {
      getDocs(queryCollection).then((res) =>
        setData(
          res.docs.map((product) => ({ id: product.id, ...product.data() }))
        )
      );
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
