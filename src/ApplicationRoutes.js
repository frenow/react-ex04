import React from "react";
import { Route } from "react-router-dom";
import {Home, Product, Carrinho } from "./components";

export const ApplicationRoutes = () => (
  <>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" exact component={Product} />
    <Route path="/carrinho" component={Carrinho} />
  </>
);