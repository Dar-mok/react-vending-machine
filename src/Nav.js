import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <span className="flex">
      <p><Link to="/">Home</Link></p>
    </span>
  );
}

export default Nav;