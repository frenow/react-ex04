import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { removeProduct } from '../actions';
import { REMOVE_PRODUCT } from '../actions/actionTypes';

function Carrinho(props) {
  const [produto, setProduto] = useState(props.product);

  const product = props.product;
  console.log(...product);

  useEffect(() => {
    setProduto(props.product);    
  }, [props]);    

    function removeProduct(prod) {
      console.log('remove product '+prod.name);    
      props.removeProduct(prod);
      return { type: REMOVE_PRODUCT, prod }
      }
  
    return(
    <><h1>Carrinho</h1>
            <div>
            <ul>    
            {produto.map(prod => <li><h3>{prod.name}</h3> Preço: {prod.price} <span><button onClick={() => removeProduct(prod)}>Remove to cart</button></span></li>
            )}
            </ul>
            </div>
    </>
    );
  }
  const mapStateToProps = store => ({
    product: store.product
  });

const mapDispatchToProps= (dispatch)=>{
    
  return{
      removeProduct: (produto)=>{dispatch(removeProduct(produto))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Carrinho);