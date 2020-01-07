import React, { Component } from "react";
import ProductMenu from "../components/ProductMenu";
import './BreakfastMenu.css';
import BlueSidebar from '../components/BlueSidebar'

//impotar data json
import data from "../data/menu.json";

class BreakfastMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: data.Breakfast,
      orders: [],
      orderPrice: 0
    };
    // this.handleClick=this.handleClick.bind(this);
  }
  handleClick = (name, price) => {

    let productsAdded = this.state.orders
    productsAdded.push({
      productName: name,
      productPrice: price
    })

    let currentTotal = this.state.orderPrice;
    let sumTotal = price;
        let newTotal = currentTotal + sumTotal;
        this.setState({
          orderPrice: newTotal
        });
        console.log(productsAdded)
  }
  deleteProduct = (index,e)=>{

    let productToDelete = this.state.orders;
    this.setState({
      orders: productToDelete.filter((productToDelete, i) => {
        return i !== index;
      })
    })
    /* Al eliminarse el item, debemos restarlo del total*/
    let currentTotal = this.state.orderPrice;
    let minusTotal = e.productPrice;
    let newTotal = currentTotal - minusTotal;
    this.setState({
      orderPrice: newTotal
    });
  }
  render() {
    const drinks = this.state.menu.map((products) => {
              
      if (products.category === "Bebestible") {
        return (
          <React.Fragment>
            
            <ProductMenu
              handleClick={this.handleClick}
              productDetail={products}
              key={products.id}
              name={products.name}
              price={products.price}
              img={products.img}
              category={products.category}
            />
          </React.Fragment>
        );
      }
    })

    const food =  this.state.menu.map((products) => {
      if (products.category === "Comida") {
        return (
          <React.Fragment>
            <ProductMenu
              handleClick={this.handleClick}
              productDetail={products}
              key={products.id}
              name={products.name}
              price={products.price}
              img={products.img}
              category={products.category}
            />
          </React.Fragment>
        );
      }
    })
    const orderTotal = this.state.orders.map((e, index)=>
    <p key = {index} productName={e.productName} productPrice={e.productPrice}>
      {e.productName} - {e.productPrice} <button  onClick={()=>{this.deleteProduct(index,e)}} >x</button>
    </p>
      

      
    /* <tr key ={index}>
    <span>{e.productName}</span>
    <span>{e.productPrice}</span>
    <button>x</button>
    </tr> */
  )
    return (
      <React.Fragment>
        <section className="cien">
          <div className="setenta">
            <h1>Desayuno</h1>
            <h1>Bebestible</h1>
            {drinks}
            <h1>Comida</h1>
            {food} 
          </div>
          <div className="treinta">
            
              
              <BlueSidebar total={this.state.orderPrice} totalOrder={orderTotal}/>
                
               
              
              <button>Enviar</button>
          

          
        </div>
      </section>
      
      </React.Fragment>
    );
  }
}

export default BreakfastMenu;
