/* Pagina inicial de mesero */
/* Componentes: - Sidebar yellow, Sidebar Azul, Central White */

import React, { Component } from "react";
import "./Waiter.css";
import YellowSidebar from "../Def Componentes/SidebarYellow.js";
import CentralWhite from "../Def Componentes/CentralWhite.js";
import BlueSidebar from "../Def Componentes/SidebarBlue.js";

class WaiterView extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      orderPrice: 0
    };
  }
  handleClick = (name, price) => {
    let productsAdded = this.state.orders;
    productsAdded.push({
      productName: name,
      productPrice: price
    });

    let currentTotal = this.state.orderPrice;
    let sumTotal = price;
    let newTotal = currentTotal + sumTotal;
    this.setState({
      orderPrice: newTotal
    });
    console.log(productsAdded);
  };
  deleteProduct = (index, e) => {
    let productToDelete = this.state.orders;
    this.setState({
      orders: productToDelete.filter((productToDelete, i) => {
        return i !== index;
      })
    });
    /* Al eliminarse el item, debemos restarlo del total*/
    let currentTotal = this.state.orderPrice;
    let minusTotal = e.productPrice;
    let newTotal = currentTotal - minusTotal;
    this.setState({
      orderPrice: newTotal
    });
  };
  render() {
    const orderTotal = this.state.orders.map((e, index)=>
    <p key = {index} productName={e.productName} productPrice={e.productPrice}>
      {e.productName} - {e.productPrice} <button  onClick={()=>{this.deleteProduct(index,e)}} >x</button>
    </p>
    )
    return (
      <div className="container">
        <YellowSidebar />
         {/* le pasamos como prop handleClick para volver a pasárselo a través del route a los componentes hijos 'MenuLunch y MenuBreakfast'*/}
        <CentralWhite handleClick={this.handleClick}/>
        <BlueSidebar total={this.state.orderPrice} totalOrder={orderTotal} />
        
      </div>
    );
  }
}

export default WaiterView;
