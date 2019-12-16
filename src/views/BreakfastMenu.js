import React, { Component } from "react";
import ProductMenu from "../components/ProductMenu";

//impotar data json
import data from "../data/menu.json";

const Drinks = () => {
  return (
    <div>
        <h2>Bebidas</h2>
      {data.Breakfast.map((products, i) => {
        if (products.category === "Bebestible") {
          return (
            <React.Fragment>
              <ProductMenu
                key={products.id}
                name={products.name}
                price={products.price}
                img={products.img}
                category={products.category}
              />
            </React.Fragment>
          );
        }
      })}
    </div>
  );
};

const Food = () => {
    return (
      <div>
          <h2>Comida</h2>
        {data.Breakfast.map((products, i) => {
          if (products.category === "Comida") {
            return (
              <React.Fragment>
                <ProductMenu
                  key={products.id}
                  name={products.name}
                  price={products.price}
                  img={products.img}
                  category={products.category}
                />
              </React.Fragment>
            );
          }
        })}
      </div>
    );
  };

class BreakfastMenu extends Component {
  constructor() {
    super();
    this.state = {
      menu: data
    };
  }
  getProductNameAndPrice(i) {
    let productName = i.name;
    let productPrice = i.price;
    let productCategory = i.category;
    console.log(productName, productPrice, productCategory);
  }

  render() {
    return (
      <React.Fragment>
        <h1>Desayuno</h1>
        <div className="">
          <Drinks />
          <Food />
        </div>
      </React.Fragment>
    );
  }
}

export default BreakfastMenu;
