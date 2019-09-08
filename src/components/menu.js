import React from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import Countcart from './countcart'

const Menu = (props) => (
  <>
  <nav id="menu">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Carrinho">Cart<Countcart /></Link>
        </li>
      </ul>
   </nav>
      <style jsx>{`
        #menu ul {
            padding:0px;
            margin:0px;
            text-align: center;
            background-color:#EDEDED;
            list-style:none;
        }
        #menu ul li { display: inline; }
        #menu ul li a {
            padding: 2px 10px;
            display: inline-block;
            background-color:#EDEDED;
            color: #333;
            text-decoration: none;
            border-bottom:3px solid #EDEDED;
        }
        #menu ul li a:hover {
            background-color:#D6D6D6;
            color: #6D6D6D;
            border-bottom:3px solid #000CEA;
        }
    `}</style>         

  </>
);

const mapStateToProps = store => ({
    product: store.product
  });

export default connect(mapStateToProps)(Menu);