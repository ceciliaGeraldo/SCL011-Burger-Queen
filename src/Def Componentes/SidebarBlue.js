/* Componente barra lateral derecha azul */
/* Componentes: - Input nombre cliente, input numero de mesa, pedido realizado, botón enviar cocina */

import React, {Component} from 'react';
import './SidebarBlue.css';

class BlueSidebar extends Component {

    render(){
        return(
        <div className="sidebarBlue">
            <input type="text" placeholder="Nombre Cliente"/>
            <input type="number" placeholder="Nº de Mesa" />
            <h1 className="orderNumber">Pedido Nº</h1>
            <button className="btnKitchen">Enviar a Cocina</button>
        </div>
        )
    }
}

export default BlueSidebar;