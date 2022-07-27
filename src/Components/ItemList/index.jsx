import Item from "../Item/item";

import React from "react";

const ItemList = ({ data }) => {
  return (
    <>
      {data?.map((e) => (
        <Item key={e.id} info={e} />
      ))}
    </>
  );
};

export default ItemList;
