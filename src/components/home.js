import React, { useState, useEffect, Suspense } from "react";
import { Products } from '../api/Products';
import { Producterror } from '../components/producterror';

const ProductItem = React.lazy(() => import('./item'));

export default function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    Products.getProducts().then( (prod) => setProdutos(prod.items));    
  }, []);  

    return(
        <>
            <h1>Amazing redux store</h1> 
            <Producterror>
            <Suspense fallback={<h1>Loading...</h1>}>
            <div>
            {produtos.map(prod => 
            <ProductItem prod = {prod} />
            )}
            </div>
            </Suspense>
            </Producterror>    
        </>
        );        
}