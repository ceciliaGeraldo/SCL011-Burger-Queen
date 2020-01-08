/* Pagina inicial de mesero */
/* Componentes: - Sidebar yellow, Sidebar Azul, Central White */

import React, { Component } from "react";
import "./Waiter.css";
import YellowSidebar from "../Def Componentes/SidebarYellow.js";
import CentralWhite from "../Def Componentes/CentralWhite.js";
import BlueSidebar from "../Def Componentes/SidebarBlue.js";
import db from "../firebaseConfig.js"

class WaiterView extends Component {
  constructor() {
    super();
    this.state = {
      orders: [],
      orderPrice: 0,
      inputName: "",
      inputNumber: "",
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

//   componentDidMount() {
//     db.collection("customersAndOrders").onSnapshot((snapShots) => {
//         this.setState({
//             orders: snapShots.docs.map(doc => {
//                 return { id: doc.id, data: doc.data() }
//             })
//         })
//     })
// }

/* Funciones para enviar inputs a firebase */
changeValueName = (e) => {
    this.setState({
        inputName: e.target.value,
    })
}

changeValueNumber = (e) => {
    this.setState({
        inputNumber: e.target.value,
    })
}

action = () => {
    const { orders, inputName, inputNumber } = this.state;
    db.collection("customersAndOrders").add({
        orders: { inputName, inputNumber, orders }
    }).then(() => {
        console.log("agregado");
    }).catch(() => {
        console.log("error");
    })
}

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
        <BlueSidebar 
        total={this.state.orderPrice} 
        totalOrder={orderTotal} 
        action={this.action}
        clientName={this.state.inputName} 
        clientTable={this.state.inputNumber}
        changeValueName={this.changeValueName}
        changeValueNumber={this.changeValueNumber} />
      </div>
    );
  }
}

export default WaiterView;
