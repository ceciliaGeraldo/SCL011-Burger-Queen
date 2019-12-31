import React, {Component} from 'react';
import './ProductMenu.css';

class ProductMenu extends Component {
    constructor (){
        super();
        this.state = {
            orders: [],
            name: "",
            price: "",
            category: "",
            quantity: 0,
        }
        this.handleClick= this.handleClick.bind(this)
    }
    handleClick () {
        const itemName= this.props.name;
        const itemPrice= this.props.price;
        const itemCategory = this.props.category;
        
        console.log(itemName, itemPrice, itemCategory);
    }
    

    render(){

    return (
            <button className = 'cardMenu' onClick={this.handleClick} >
                <img src={this.props.img} alt="menu icon" className="imgMenu"/>
                <div className='name'><span>{this.props.name}</span></div>
                <div className='price'><span>{this.props.price}</span></div>
            </button>
    )   
    }
}

export default ProductMenu;