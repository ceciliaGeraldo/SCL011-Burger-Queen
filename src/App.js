import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import LunchMenu from "./views/LunchMenu";
import BreakfastMenu from "./views/BreakfastMenu";
import Home from "./views/Home";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Home />
        </header>
      </div>
    </Router>
  );
}

export default App;
