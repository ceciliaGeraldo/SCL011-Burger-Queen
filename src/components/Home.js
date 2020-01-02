import React from "react";
import "./Home.css";
//import BreakfastMenu from "./views/BreakfastMenu";
import homeImg from "../img/home-img.png";
import LinkButton from './LinkButton'
import BreakfastMenu from "../views/BreakfastMenu"

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="container">
        
        <LinkButton to="/home/breakfast-menu" id="btn-waitter" className="btn-blue">
        Mesero/a
        </LinkButton>
        
        <LinkButton to="/kitchen-view" id="btn-chef" className="btn-blue">
        Jefe de cocina
        </LinkButton>
        
        

        <img className="home-img" alt="home-img" src={homeImg} />

       
      </div>
      

    </Router>
      
      
  );
}
export default Home;
