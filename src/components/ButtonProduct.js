/// boton generico para menu

import React, { Component } from 'react'

class ButtonProduct extends Component{
    
    render(){
      
      return  <div>
        <button variant="contained" onClick={this.props.handleClick.bind(this, this.props.productProp)}>{this.props.productProp.product}-{this.props.productProp.price}</button>
    
      </div>
    }
  }
 
  export default ButtonProduct;
