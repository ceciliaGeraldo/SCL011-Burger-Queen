/* Componente Cartas que contienen la opciones del menú */

import React, {Component} from "react";
import "./MenuCards.css";

class MenuCards extends Component {

    render(){
        const {name, price, img, category } = this.props.productDetail;
        return <button className="cardMenu" onClick={this.props.handleClick.bind(this, name, price)} >
            <img src={img} alt="menu-icon" className="imgMenu"></img>
            <h1 className="name">{name}</h1>
            <h1 className="price">$ {price}</h1>
            </button>
    }
}

export default MenuCards;