import './App.css';
import React from "react";
import RoutesList from './RoutesList';
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
    </div>
  );
}

export default App;
