/* Componente Menu Desayuno */
/* Llamado a componente MenuCards */

import React, {Component} from "react";
import MenuCards from './MenuCards.js';
import Data from "../data/menu.json";


class MenuBreakfast extends Component {
    constructor() {
        super() ;
        this.state = {menu: Data.Breakfast} 
    }

    render(){
        return this.state.menu.map(e => 
        <MenuCards 
        key={e.id}
        img={e.img}
        name={e.name}
        price={e.price}/>);
    }
}


export default MenuBreakfast;