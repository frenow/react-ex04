import React from "react";
import { Route } from "react-router-dom";
import {Home, Product, Cart } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/Product/:id" exact component={Product} />
    <Route path="/Cart" component={Cart} />
  </>
);