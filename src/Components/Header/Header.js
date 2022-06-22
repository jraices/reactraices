import React from "react";
import logo from "../../assets/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <link
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      ></link>

      <h1>RainoSolutions</h1>
      <nav>
        <a href="">Inicio</a>
        <a href="">Nosotros</a>
        <a href="">Contacto</a>
        <a href="">Productos</a>
      </nav>
      <ShoppingCartIcon color="action" fontSize="large" />
    </header>
  );
};

export default Header;
