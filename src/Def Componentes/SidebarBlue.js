/* Componente barra lateral derecha azul */
/* Componentes: - Input nombre cliente, input numero de mesa, pedido realizado, botón enviar cocina */

import React, { Component } from "react";
import "./SidebarBlue.css";
import Inputs from "./InputsOrder.js";

class BlueSidebar extends Component {
  render() {
    return (
      <div className="sidebarBlue">
        <Inputs />
        <h1 className="orderNumber">Pedido Nº</h1>
        <div>
          <span>{this.props.totalOrder}</span>
          <p>Total: ${this.props.total}</p>
          <button className="btnKitchen">Enviar a Cocina</button>
        </div>
      </div>
    );
  }
}

export default BlueSidebar;
