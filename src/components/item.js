import React from "react";
import {Link} from 'react-router-dom';

export const Item = ({prod}) => (
   <>
         <div className='row'>         
         <a className='card'>
         <img src="imagem.jpg" alt="Produto" />	
         <h2>{prod.name}</h2>
         <p>{prod.price}</p> 
         <Link to={'/product/'+prod.id}>Detalhe</Link>
         </a>           
         </div>

         <style jsx>{`
      h1 { text-align: center; }
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