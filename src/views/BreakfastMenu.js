import React, { Component } from "react";
import ProductMenu from "../components/ProductMenu";

//impotar data json
import data from "../data/menu.json";

class BreakfastMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu: data,
    };
  }
  getProductNameAndPrice(i) {
    let productName = i.name;
    let productPrice = i.price;
    console.log(productName, productPrice);
  }
  getCategory(i){
      let productCategory = i.category;
      console.log(productCategory);
  }

  render() {
    return (
    <React.Fragment>
        <h1>Desayuno</h1>
    <div className="">
        {this.state.menu.Breakfast.map(i => (
            
            
          <ProductMenu
            onClick={this.getProductNameAndPrice(i)}
            key={i.id}
            name={i.name}
            price={i.price}
            img={i.img}
            category={i.category}
          />
        ))}
      </div>
    </React.Fragment>
  
    );
  }
}

export default BreakfastMenu;
