/* Componente barra central blanco */
/* Componentes: - Botón desayuno, botón almuerzo */
/* Llamado a componente MenuBrakfast y MenuLunch */

import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MenuBreakfast from './MenuBreakfast.js';
import MenuLunch from './MenuLunch.js';
import Data from "../data/menu.json";
import "./CentralWhite.css";

class CentralWhite extends React.Component{
    constructor() {
        super() ;
        this.state ={menu: Data}
    }

    render(){
        return(
        <Router>
            <div className="containerMenuWhite">
            <div className="containerButtonsMenu">
            <Link to="/Desayuno"><button className="btn">Desayuno</button></Link>
            <Link to="/Almuerzo"><button className="btn">Almuerzo</button></Link>
            </div>

            <div><Route exact path="/Desayuno" component={MenuBreakfast}/></div>
            <div><Route exact path="/Almuerzo" component={MenuLunch}/></div>
            </div>
        </Router>
        )
    }
}

export default CentralWhite;
