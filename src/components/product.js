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
    <div className='row'>         
    <a className='card'>
    {produto.image && (
          <img
            src={require(`../assets/images/${produto.image}`)}
            alt="Produto"
          />
        )}
    <h1>{produto.name}</h1>
    <h2>${produto.price}</h2>
    <p>{produto.description}</p>
    <button onClick={() => addProduct(produto)}>Add to cart</button>
    </a>
    </div>
    <style jsx>{`
      h1 { text-align: center; }
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
      .row {
        max-width: 680px;
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
  
 // const mapDispatchToProps = dispatch =>
 //   bindActionCreators({ addProduct }, dispatch);
  
 const mapDispatchToProps= (dispatch)=>{
    
    return{
        addProduct: (produto)=>{dispatch(addProduct(produto))}
    }
}
  export default connect(mapStateToProps, mapDispatchToProps)(Product);