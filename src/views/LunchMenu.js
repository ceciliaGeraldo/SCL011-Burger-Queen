import React, { Component } from "react";
import ProductMenu from "../components/ProductMenu";

//impotar data json
import data from "../data/menu.json";

class LunchMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu: data
    };
  }
  getProductNameAndPrice(i) {
    let productName = i.name;
    let productPrice = i.price;
    console.log(productName, productPrice);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Almuerzo</h1>
        <div className="">
          {this.state.menu.Lunch.map(i => (
            <ProductMenu
              onClick={this.getProductNameAndPrice(i)}
              key={i.id}
              name={i.name}
              price={i.price}
              img={i.img}
            />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default LunchMenu;
