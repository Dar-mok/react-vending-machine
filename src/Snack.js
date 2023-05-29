import React from "react";
import { useParams, Link } from "react-router-dom";

function Snack (){
  const { name } = useParams();

  return (
    <div>
      <h1>Here's your {name}</h1>
      <Link to="/">Back to Menu</Link>
    </div>
  );
}
export default Snack;