import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";

export function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Cart">Cart</Link>
        </li>
      </ul>
      <ApplicationRoutes />
    </div>
  );
}