import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { Provider } from "react-redux";
import { Store } from "./store";

export function App() {
  return (
    <Provider store={Store}> 
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Carrinho">Cart</Link>
        </li>
      </ul>
      <ApplicationRoutes />
    </div>
    </Provider>
  );
}