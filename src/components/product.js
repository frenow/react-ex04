import React, { useState, useEffect } from "react";
import { Products } from '../api/Products';

export function Product (props) {
    const [produto, setProduto] = useState([]);
    
    useEffect(() => {
        Products.getProductById(props.match.params.id).then( (prod) => setProduto(prod));    
      }, []);      

    return(
    <>
    <h1>{produto.name}</h1>
    <h2>{produto.price}</h2>
    <p>{produto.description}</p>
    <button>Add to cart</button>
    </>
    );
}