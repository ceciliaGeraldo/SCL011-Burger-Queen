import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
//import LunchMenu from "./views/LunchMenu";
import BreakfastMenu from "./views/BreakfastMenu";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <div className="root">
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/home/breakfast-menu" component={BreakfastMenu} />
        
      </Switch>
      </div>


    </Router>
  );
}

export default App;
