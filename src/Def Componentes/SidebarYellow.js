/* Componente barra lateral izquierda amarilla */
/* Componentes: - Simbología de pedidos, cartas estado de pedidos, botón home */

import React, {Component} from "react";
import "./SidebarYellow.css";
import HomeButton from "../img/Home.png"
import { Link } from "react-router-dom";


class YellowSidebar extends Component{

    render(){
        return(
        <div className="sidebarYellow">
            <div className="symbologyOrders">
                <h3 className="symbologyTitle">Simbología Pedidos</h3>
            </div>
            <Link to="/home" ><button className="btnHome"><img className="imgBtnHome" src={HomeButton}/></button></Link>
            
        </div>
        )
    }
}

export default YellowSidebar;