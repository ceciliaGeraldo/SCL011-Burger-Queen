import React, {Component} from 'react';
import './ProductMenu.css';

class ProductMenu extends Component {
//    handleClick () {

//         const itemName= this.props.productDetail.name;
//         const itemPrice= this.props.productDetail.price;
//         const itemCategory = this.props.productDetail.category;
        
//         console.log(itemName, itemPrice, itemCategory);
//         this.handleClick=this.handleClick.bind(this)
//     }
    

    render(){
    const {name, price, img, category } = this.props.productDetail;
    return (
            <button className = 'cardMenu' onClick={this.props.handleClick.bind(this, name, price)} >
                <img src={img} alt="menu icon" className="imgMenu"/>
                <div className='name'><span>{name}</span></div>
                <div className='price'><span>{price}</span></div>
            </button>
    )   
    }
}

export default ProductMenu;