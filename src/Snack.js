import React from "react";
import { useParams, Link } from "react-router-dom";

function Snack (){
  const { name } = useParams();

  return (
    <div>
      <h1>This is {name}</h1>
      <Link to="/">Go home</Link>
    </div>
  );
}
export default Snack;