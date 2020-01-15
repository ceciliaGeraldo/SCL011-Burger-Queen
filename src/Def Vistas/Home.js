/* Pagina inicial de la aplicación */
/* Botón mesero, botón jefe de cocina e imagen */

import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import homeImg from "../img/home-img.png";


function Home() {
  return (
        <div className="container">
          <div className="containerButtons">
            <Link to="/waiter-view">
              <button className="btn-blue">Mesero/a</button>
            </Link>
            <Link to="/chef-view">
              <button className="btn-blue">Jefe/a de cocina</button>
            </Link>
          </div>
          <img className="home-img" alt="home-img" src={homeImg} />
        </div>
  );
}

export default Home;
