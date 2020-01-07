import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
//import LunchMenu from "./views/LunchMenu";
import BreakfastMenu from "./views/BreakfastMenu";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/breakfast-menu" component={BreakfastMenu} />
      </Switch>
    </Router>
  );
}

export default App;
