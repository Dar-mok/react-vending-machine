import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Snack from "./Snack";
import VendingMachine from "./VendingMachine";

function RoutesList(){
  return (
    <Routes>
      <Route path="/" element={<VendingMachine />} />
      <Route path="/snacks/:name" element={<Snack />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default RoutesList;