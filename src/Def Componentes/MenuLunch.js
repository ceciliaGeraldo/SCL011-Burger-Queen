/* Componente Menu Almuerzo */
/* Llamado a componente MenuCards */

import React, { Component } from "react";
import MenuCards from "./MenuCards.js";
import Data from "../data/menu.json";
import "./MenuLunch.css";

class MenuLunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: Data.Lunch
    };
  }

  render() {
    const drinks = this.state.menu.map(products => {
      if (products.category === "Bebestible") {
        return (
          <React.Fragment>
            <MenuCards
              handleClick={this.props.handleClick}
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
    });

    const food = this.state.menu.map(products => {
      if (products.category === "Comida") {
        return (
          <React.Fragment>
            <MenuCards
              handleClick={this.props.handleClick}
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
    });

    const accompaniments = this.state.menu.map(products => {
      if (products.category === "Acompanamiento") {
        return (
          <React.Fragment>
            <MenuCards
              handleClick={this.props.handleClick}
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
    });
    const aggregates = this.state.menu.map(products => {
      if (products.category === "Agregados") {
        return (
          <React.Fragment>
            <MenuCards
              handleClick={this.props.handleClick}
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
    });

    return (
      <div className="containerCardsBreakfast">
        <div className="two-categories-container">
          <div id="food-container">
            <h3 className="title">Comida</h3>
            <div className="menuContainer">{food}</div>
          </div>
          <div id="aggregates-container">
            <h3 className="title">Agregados</h3>
            <div className="menuContainer">{aggregates}</div>
          </div>
        </div>

        <h3 className="title">Acompañamientos</h3>
        <div className="menuContainer">{accompaniments}</div>

        <h3 className="title">Bebestible</h3>
        <div className="menuContainer">{drinks}</div>
      </div>
    );
  }
}

export default MenuLunch;
