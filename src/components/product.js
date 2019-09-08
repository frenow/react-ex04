import React, { useState, useEffect } from "react";
import { Products } from '../api/Products';
import { addProduct } from '../actions'; 
import { connect } from 'react-redux';
import { ADD_PRODUCT } from '../actions/actionTypes';

function Product (props) {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        Products.getProductById(props.match.params.id).then( (prod) => setProduto(prod));
      }, []);    

    function addProduct(produto) {
        console.log('add product '+produto.name);    
        props.addProduct(produto);
        return { type: ADD_PRODUCT, produto }
    }
//{require(`../assets/images/${produto.image}`)}
    return(
    <>
    <img src='xxx.jpg' alt="Produto" />
    <h1>{produto.name}</h1>
    <h2>{produto.price}</h2>
    <p>{produto.description}</p>
    <button onClick={() => addProduct(produto)}>Add to cart</button>
    </>
    );
}
const mapStateToProps = store => ({
    product: store.product
  });
  
 // const mapDispatchToProps = dispatch =>
 //   bindActionCreators({ addProduct }, dispatch);
  
 const mapDispatchToProps= (dispatch)=>{
    
    return{
        addProduct: (produto)=>{dispatch(addProduct(produto))}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Product);