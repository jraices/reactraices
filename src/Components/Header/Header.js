import React from "react";
import logo from "../../assets/logo.jpg";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./Header.css";
import CartWidget from "../CartWidget";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <img src={logo} alt="" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      ></link>

      <h1>RainoSolutions</h1>
      <div className="container">
        <nav className="nav">
          <div className="nav__brand">
            <NavLink className="nav__link" to="/">
              Inicio
            </NavLink>
          </div>
          <ul className="nav__list">
            <li>
              <NavLink className="nav__link" to="/categoria/electronicalocal">
                Productos Nacionales
              </NavLink>
            </li>
            <li>
              <NavLink
                className="nav__link"
                to="/categoria/electronicaimportada"
              >
                Productos Importados
              </NavLink>
            </li>
            <li>
              <NavLink className="nav__link" to="/cart">
                <CartWidget />
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <ShoppingCartIcon color="action" fontSize="large" />
    </header>
  );
};

export default Header;
