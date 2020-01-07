/* Componente Cartas que contienen la opciones del menú */

import React, {Component} from "react";
import "./MenuCards.css";

class MenuCards extends Component {

    render(){
        return <button className="cardMenu">
            <img src={this.props.img} alt="menu-icon" className="imgMenu"></img>
            <h1 className="name">{this.props.name}</h1>
            <h1 className="price">{this.props.price}</h1>
            </button>
    }
}

export default MenuCards;