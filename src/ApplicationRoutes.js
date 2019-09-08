import React, {Suspense, lazy} from "react";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Carrinho from "./components/carrinho"
const Product = lazy(() => import("./components/product"));

export const ApplicationRoutes = () => (
    <>
    <Suspense fallback={<h1>Loading...</h1>}>
    <Route path="/" exact component={Home} />
    <Route path="/product/:id" exact component={Product} />
    <Route path="/carrinho" component={Carrinho} />
    </Suspense>
    </>
);
