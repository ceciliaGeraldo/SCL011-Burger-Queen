/* Componente barra lateral derecha amarilla */
/* Componentes: -pedidos listos para servir y boton home */

import React, {Component} from "react";
import "./ChefSidebarYellow.css";
import HomeButton from "../img/Home.png"
import { Link } from "react-router-dom";

class ChefYellowSidebar extends Component{

    render(){
        return(
        <div className="chefSidebarYellow">
            <div className="readyContainer"></div>
            <Link to="/home"><button className="btnHome"><img className="imgBtnHome" src={HomeButton}/></button></Link>
        </div>
        )
    }
}

export default ChefYellowSidebar;