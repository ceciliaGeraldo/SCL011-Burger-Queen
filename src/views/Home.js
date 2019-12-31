import React from "react";
import "./Home.css";
//import BreakfastMenu from "./views/BreakfastMenu";
import homeImg from "../img/home-img.png";

function Home() {
  return (
      <div className="container">
      <button id="btn-waitter" className="btn-blue">
          Mesero/a
        </button>
        
        <button id="btn-chef" className="btn-blue">
          Jefe de cocina
        </button>

        <img className="home-img" alt="home-img" src={homeImg} />
      </div>

      
  );
}
export default Home;
