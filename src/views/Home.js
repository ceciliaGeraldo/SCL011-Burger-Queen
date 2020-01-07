import React, {Component} from "react";
import "./Home.css";
//import BreakfastMenu from "./views/BreakfastMenu";
import homeImg from "../img/home-img.png";
import LinkButton from '../components/LinkButton'


class Home extends Component {
  constructor(){
    super();
    this.state = {
      show: true
    }
  }
  goHide(){
    
    this.setState({show: false})
  }
  render(){
    return (
    
        <div className="container">
          
          <LinkButton to="/breakfast-menu" id="btn-waitter" className="btn-blue">
          Mesero/a
          </LinkButton>
          
          <LinkButton to="/kitchen-view" id="btn-chef" className="btn-blue">
          Jefe de cocina
          </LinkButton>
          
          
  
          <img className="home-img" alt="home-img" src={homeImg} />
         
        </div>
        
  
        
        
    )
  }
  
}
export default Home;
