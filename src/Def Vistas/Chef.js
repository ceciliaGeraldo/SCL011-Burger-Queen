import React, {Component} from "react";
import "./Chef.css";
import ChefYellowSidebar from "../Def Componentes/ChefSidebarYellow.js"
import OrdersWhite from "../Def Componentes/OrdersWhite.js"

class ChefView extends Component {

    render(){
        return(
        <div className="container">
            <ChefYellowSidebar/>
            <OrdersWhite/>
        </div>
        )
    }
}

export default ChefView;