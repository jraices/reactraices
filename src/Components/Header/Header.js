import React from "react";
import logo from "../../assets/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import CartWidget from "../CartWidget";

const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
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
        <a href="">
          <CartWidget />
        </a>
      </nav>
      <ShoppingCartIcon color="action" fontSize="large" />
    </header>
  );
};

export default Header;
