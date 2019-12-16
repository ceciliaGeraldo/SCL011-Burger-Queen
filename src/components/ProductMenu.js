import React, {Component} from 'react';


class ProductMenu extends Component {
    constructor (){
        super();
        this.state = {
            orders: [],
            name: "",
            price: "",
            category: "",
        }
        this.handleClick= this.handleClick.bind(this)
    }

    handleClick () {
        const itemName= this.props.name;
        const itemPrice= this.props.price;
        const itemCategory = this.props.category;
        console.log(itemName, itemPrice);
    }

    render(){
        
    return (
            <button className = '' onClick={this.handleClick} >
                <img src={this.props.img} alt="menu icon" className=""/>
                <div className=''><p>{this.props.name}</p></div>
                <div className=''><p>{this.props.price}</p></div>
            </button>
    )   
    }
}

export default ProductMenu;