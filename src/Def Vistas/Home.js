/* Pagina inicial de la aplicación */
/* Botón mesero, botón jefe de cocina e imagen */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./Home.css";
import homeImg from "../img/home-img.png";
import WaiterView from "./Waiter.js";


function Home() {
  return (
    <Router>
      <div className="container">
        <div className="containerButtons">
        <Link to="/Waiter"><button className="btn-blue">Mesero/a</button></Link>
        <Link to="/Chef"><button className="btn-blue">Jefe/a de cocina</button></Link>
        </div>
        <img className="home-img" alt="home-img" src={homeImg} />
      
      </div>

      <Route exact path="/Waiter" component={WaiterView}/>
    </Router>
  );
}

export default Home;
