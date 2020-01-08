/* Componente Menu Desayuno */
/* Llamado a componente MenuCards */

import React, {Component} from "react";
import MenuCards from './MenuCards.js';
import Data from "../data/menu.json";


class MenuBreakfast extends Component {
    constructor(props) {
        super(props) ;
        this.state = {menu: Data.Breakfast} 
    }
   

    render(){

         const drinks = this.state.menu.map((products) => {
              
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
          })
      
          const food =  this.state.menu.map((products) => {
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
          })

          return(
            <div >
            <h3>Bebestible</h3>
            {drinks}
            <h3>Comida</h3>
            {food} 
            </div>
            );
        }
    }
    




export default MenuBreakfast;