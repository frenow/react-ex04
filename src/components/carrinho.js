import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
import { removeProduct } from '../actions';
import { REMOVE_PRODUCT } from '../actions/actionTypes';
import Totalcart from './totalcart';

function Carrinho(props) {
  const [produto, setProduto] = useState(props.product);

  const product = props.product;
  console.log(...product);

  useEffect(() => {
    setProduto(props.product);    
  }, [props.product]);    

    function removeProduct(prod) {
      console.log('remove product '+prod.name);    
      props.removeProduct(prod);
      return { type: REMOVE_PRODUCT, prod }
      }
  
    return(
    <><h1>Carrinho</h1>
    <nav id="cart">
         <div className='row'>         
         <a className='card'>
            <ul id="cart">    
            {produto.map(prod => <li key={prod.id}><h3>{prod.name}</h3> Preço: ${prod.price}<span><button onClick={() => removeProduct(prod)}>Remove to cart</button></span></li>
            )}
            </ul>
          </a>
          </div>
      </nav>
      <h2><Totalcart /></h2>
      <style jsx>{`
      h1 { text-align: center; }
      h2 { text-align: center; }
      button {
        background-color: #555555;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 16px;
      }
      button:hover {
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
      }
      #cart ul {
        padding:0px;
        margin:0px;
        text-align: center;
        list-style:none;
    }
      .row {
        max-width: 220px;
        margin: 40px auto 20px;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
      }
      .card {
        padding: 18px 18px 24px;
        width: 640px;
        text-align: left;
        text-decoration: none;
        color: #434343;
        border: 1px solid #9b9b9b;
      }
      .card:hover {
        border-color: #067df7;
      }
    `}</style>  
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