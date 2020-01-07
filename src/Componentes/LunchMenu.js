import React, {Component} from "react";
import CardsMenu from './CardsMenu.js'

class LunchMenu extends Component {

    render(){
        return this.props.menu.Lunch.map(e => 
        <CardsMenu 
        img={e.img}
        name={e.name}
        price={e.price}/>);
    }
}

export default LunchMenu;