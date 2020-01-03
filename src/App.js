import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import Home from "./Def Vistas/Home.js";


function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);

  return (
      <Home/>
  );
}


export default App;
