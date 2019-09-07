import React, { useState, useEffect } from "react";
import { Item } from './item';
import { Products } from '../api/Products';

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    Products.getProducts().then( (prod) => setProdutos(prod.items));    
  }, []);  

    return(
        <>
            <h1>Amazing redux store</h1> 
            <div>
            {produtos.map(prod => 
            <Item prod = {prod} />
            )}
            </div>            
        </>
        );        
}