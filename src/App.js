import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
//import LunchMenu from "./views/LunchMenu";
//import BreakfastMenu from "./views/BreakfastMenu";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import React, {Component} from "react";
//import Container from "./Componentes/CentralWhiteMenu.js";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <div className="root">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Router>
  );
}
//class App extends Component{

//  render(){
//    return <div>
//      <Container/>
//      </div>
//  }
//}


export default App;
