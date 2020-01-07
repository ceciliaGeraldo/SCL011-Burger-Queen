/* Pagina inicial de mesero */
/* Componentes: - Sidebar yellow, Sidebar Azul, Central White */

import React, {Component} from "react";
import "./Waiter.css";
import YellowSidebar from "../Def Componentes/SidebarYellow.js";
import CentralWhite from "../Def Componentes/CentralWhite.js";
import BlueSidebar from "../Def Componentes/SidebarBlue.js";

class WaiterView extends Component {

    render(){
        return(
        <div className="container">
            <YellowSidebar/>
            <CentralWhite/>
            <BlueSidebar/>
        </div>
        )
    }
}

export default WaiterView;