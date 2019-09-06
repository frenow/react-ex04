import React, { useState, useEffect } from "react";
import { Products } from '../api/Products';
import { addProduct } from '../actions'; 
import { connect } from 'react-redux';

export function Product (props) {
    const [produto, setProduto] = useState([]);
    
    useEffect(() => {
        Products.getProductById(props.match.params.id).then( (prod) => setProduto(prod));    
      }, []);    

    function addProduct(produto) {
        console.log('add product');    
        return { type: 'ADD_PRODUCT', produto }
    }

    return(
    <>
    <img src="imagem.jpg" alt="Produto" />	
    <h1>{produto.name}</h1>
    <h2>{produto.price}</h2>
    <p>{produto.description}</p>
    <button onClick={addProduct}>Add to cart</button>
    </>
    );
}
const mapStateToProps = ({ produto }) => ({ product: produto });
export default connect(mapStateToProps, { addProduct })(Product);
