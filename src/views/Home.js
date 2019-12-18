import React from "react";
import "./Home.css";
import BreakfastMenu from "./views/BreakfastMenu";
import homeImg from "../img/home-img.png";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function Home() {
  return (
    <Router>
      <div className="container">
      <Link to="/waiter">
      <button id="btn-waitter" className="btn-blue">
          Mesero/a
        </button></Link>
        
        <button id="btn-chef" className="btn-blue">
          Jefe de cocina
        </button>

        <img className="home-img" alt="home-img" src={homeImg} />
      </div>

      <Route path="/waiter" component={ BreakfastMenu } />
    </Router>
  );
}
export default Home;
