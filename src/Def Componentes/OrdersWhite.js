/* Componente espacio en blanco donde se mostraran los pedidos en preparación */
/* Componentes: - Contener y Tarjeta de pedido que contiene Cronometro, pedido y boton pedido preparado*/

import React, {Component} from "react";
import "./OrdersWhite.css";
import OrderCards from "./OrderCard.js"


class OrdersWhite extends Component{

    render(){
        return(
        <div className="ordersContainer">
            <div className="oneOrder">
                <div className="chronometer"></div>
                <div className="preparingOrder"></div>
                <button className="readyPreparation"></button>
            </div>
        </div>
        )
    }
}

export default OrdersWhite;