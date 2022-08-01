import React, { useState, useEffect } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getData } from "../../api/database";

export const ItemDetailContainer = () => {
  const [dataDetail, setDataDetail] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const querydb = getFirestore();
    const queryDoc = doc(querydb, "products", id);
    getDoc(queryDoc).then((res) => {
      console.log({ id: res.id, ...res.data() });

      setDataDetail({ id: res.id, ...res.data() });
    });
  }, [id]);

  return (
    <>
      <ItemDetail dataDetail={dataDetail} />
    </>
  );
};

export default ItemDetailContainer;
