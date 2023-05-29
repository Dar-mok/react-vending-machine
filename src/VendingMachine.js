import React from "react";
import { Navigate, useParams, Link } from "react-router-dom";

function VendingMachine(){


  return (
    <div>
      <h1>Welcome to Snacks</h1>
      <Link to="/snacks/chips">Chips</Link>
      <Link to="/snacks/drink">Drink</Link>
      <Link to="/snacks/cookie">Cookie</Link>

    </div>
  );

}

export default VendingMachine;