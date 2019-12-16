import React, { Component } from "react";
import ProductMenu from "../components/ProductMenu";

//impotar data json
import data from "../data/menu.json";

const Drinks = () => {
    return (
      <div>
          <h2>Bebidas</h2>
        {data.Lunch.map((products, i) => {
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
          {data.Lunch.map((products, i) => {
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

    const Accompaniments = () => {
        return (
          <div>
              <h2>Acompañamientos</h2>
            {data.Lunch.map((products, i) => {
              if (products.category === "Acompanamiento") {
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
      
      const Addings = () => {
          return (
            <div>
                <h2>Agregados</h2>
              {data.Lunch.map((products, i) => {
                if (products.category === "Agregados") {
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
          
            <React.Fragment>
            <Drinks />
            <Food />
            <Accompaniments />
            <Addings />
            </React.Fragment>
            
            {/*<ProductMenu
              onClick={this.getProductNameAndPrice(i)}
              key={i.id}
              name={i.name}
              price={i.price}
              img={i.img}
            />*/}
          
        </div>
      </React.Fragment>
    );
  }
}

export default LunchMenu;
