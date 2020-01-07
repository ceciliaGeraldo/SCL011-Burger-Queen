import React, {Component} from "react";
import "./CardsMenu.css";

class CardsMenu extends Component {

    render(){

        return <button className="cardMenu">
            {/* <img className="imgMenu">{this.props.img}</img> */}
            <h1 className="name">{this.props.name}</h1>
            <h1 className="price">{this.props.price}</h1>
            </button>
    }
}

export default CardsMenu;