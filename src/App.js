import React from "react";
import "./App.css";
import { useFirebaseApp } from "reactfire";
import LunchMenu from './views/LunchMenu';
import BreakfastMenu from './views/BreakfastMenu'

function App() {
  const firebase = useFirebaseApp();
  console.log(firebase);
  return (
    <div className="App">
      <header className="App-header">
        
        <BreakfastMenu />
        <LunchMenu />
      </header>
    </div>
  );
}

export default App;
