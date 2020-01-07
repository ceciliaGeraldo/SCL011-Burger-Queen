import React, {Component} from "react";
import Data from '../Data/menu.json';
import LunchMenu from './LunchMenu.js';
import "./CentralWhiteMenu.css";


class Buttons extends Component{
    render(){
        return <div className="containerButtons">
        <button className="btn">Desayuno</button>
        <button className="btn">Almuerzo</button>
        </div>
    }
}


class Container extends Component{
    state ={
        menu : Data
    }

    render(){
        return <div>
            <Buttons/>
            <LunchMenu menu ={this.state.menu}/>
        </div>
    }
}

/* Función de botones con la ruta (hay que probarlo) */

// function Buttons(){
//     return(
//         <Router>
//             <div className="containerButtons">
//             <button className="btn">
//                 <Link to={}></Link>
//                 Desayuno
//             </button>
//             <button className="btn">
//                 <Link to={}></Link>
//                 Almuerzo
//             </button>
//             </div>

//             <Route path={} component={}/>
//         </Router>
//     )
// }

export default Container;
