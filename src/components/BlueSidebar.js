import React, { Component } from "react";
import "./BlueSidebar.css";

class BlueSidebar extends Component {
  render() {
    return (
      <div className="sidebarBlue">
        <input type="text" placeholder="Nombre Cliente" />
        <input type="number" placeholder="Nº de Mesa" />
        <h1 className="orderNumber">Pedido Nº</h1>
        <div className="order-product">
          <span>{this.props.totalOrder}</span>
        </div>
        <p>Total: ${this.props.total}</p>

        <button className="btnKitchen">Enviar a Cocina</button>
      </div>
    );
  }
}

export default BlueSidebar;
