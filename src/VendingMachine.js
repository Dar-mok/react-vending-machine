import React from "react";
import { Link } from "react-router-dom";

function VendingMachine() {
  return (
    <div>
      <h1>Welcome to Snacks</h1>
      <div>
        <Link to="/snacks/chips">Chips</Link>
      </div>
      <div>
        <Link to="/snacks/drink">Drink</Link>
      </div>
      <div>
        <Link to="/snacks/cookie">Cookie</Link>
      </div>
    </div>
  );
}

export default VendingMachine;
