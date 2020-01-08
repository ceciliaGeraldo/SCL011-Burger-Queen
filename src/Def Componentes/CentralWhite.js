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
            {/* A través del prop render, le entregamos al route el prop que hereda desde waiter.js para ser utilizado por sus hijos */}
            <div className="containerCards"><Route exact path="/Desayuno" render={(props) => <MenuBreakfast {...props} handleClick={this.props.handleClick}/>} /></div>
            <div className="containerCards"><Route exact path="/Almuerzo" render={(props) => <MenuLunch {...props} handleClick={this.props.handleClick}/>}/></div>
            </div>
        </Router>
        )
    }
}

export default CentralWhite;
