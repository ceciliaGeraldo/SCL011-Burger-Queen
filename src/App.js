import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import Home from "./Def Vistas/Home";
import WaiterView from "./Def Vistas/Waiter";
import ChefView from "./Def Vistas/Chef";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/waiter-view" component={WaiterView} />
        <Route path="/chef-view" component={ChefView} />
      </Switch>
    </Router>
  );
}

export default App;
