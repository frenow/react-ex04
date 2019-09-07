import React from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Carrinho from "./components/carrinho"
import Product from "./components/product"

export const ApplicationRoutes = () => (
    <>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" exact component={Product} />
    <Route path="/carrinho" component={Carrinho} />
    </>
);
