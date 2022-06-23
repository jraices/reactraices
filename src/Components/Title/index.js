import React from "react";

export const Title = (props) => {
  console.log(props);
  return <p>{props.greeting}</p>;
};

export default Title;
