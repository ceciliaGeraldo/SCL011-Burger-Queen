/* Componente barra lateral derecha azul */
/* Componentes: - Input nombre cliente, input numero de mesa, pedido realizado, botón enviar cocina */

import React, { Component } from 'react';
import './SidebarBlue.css';
import Inputs from "./InputsOrders.js";
import db from "../firebaseConfig.js"

class BlueSidebar extends Component {


    render() {
        return (
            <div className="sidebarBlue">
                <Inputs />
                <h1 className="orderNumber">Pedido Nº</h1>
                <button className="btnKitchen" onClick={this.action}>Enviar a Cocina</button>
            </div>
        )
    }
}

export default BlueSidebar;