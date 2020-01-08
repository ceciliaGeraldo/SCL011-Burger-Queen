/* Componente barra lateral derecha azul */
/* Componentes: - Input nombre cliente, input numero de mesa, pedido realizado, botón enviar cocina */

import React, { Component } from 'react';
import './SidebarBlue.css';
import Inputs from "./InputsOrders.js";

class BlueSidebar extends Component {
    render() {
        return (
            <div className="sidebarBlue">
                <Inputs 
                clientName={this.props.clientName} 
                clientTable={this.props.clientTable}
                changeValueName={this.props.changeValueName}
                changeValueNumber={this.props.changeValueNumber}/>
                <h1 className="orderNumber">Pedido Nº</h1>
                <div>
                    <span className="orderList">{this.props.totalOrder}</span>
                    <p className="totalOrderList">Total: ${this.props.total}</p>
                    <button className="btnKitchen" onClick={this.props.action}>Enviar a Cocina</button>
                </div>
            </div>
        )
    }
}
        

export default BlueSidebar;
