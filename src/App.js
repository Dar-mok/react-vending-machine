// import './App.css';
import React from "react";
import VendingMachine from './VendingMachine';
import RoutesList from './RoutesList';
// import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Nav from "./Nav";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Nav />
        <RoutesList />
      </BrowserRouter>
      <VendingMachine />
    </div>
  );
}

export default App;
