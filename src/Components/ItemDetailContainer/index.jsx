import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../ItemDetail";
import { getData } from "../../api/database";


export const ItemDetailContainer = () => {
  const [dataDetail, setDataDetail] = useState({});
  const {id} = useParams();


  useEffect(() => {

    getData
    .then((res)=>setDataDetail(res.find((e)=>e.id === Number(id))))
    .catch((err)=>console.log(err))

  }, [id]);

  return (
    <>
          <ItemDetail dataDetail={dataDetail}/> 
    </>
  ) 
};

export default ItemDetailContainer;
