import React from "react";
import { Route } from "react-router-dom";
import { home, product, cart } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={home} />
    <Route path="/product/:id" exact component={product} />
    <Route path="/cart" component={cart} />
  </>
);