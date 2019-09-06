import React from "react";
import { connect } from 'react-redux';

//function removeProduct(produto) {
//    return { type: 'REMOVE_PRODUCT', produto }
//}

export function Carrinho (props) {
//    const { produto } = props;

    return(    
    <><h1>Carrinho</h1>
            <div>
            <ul>    
            {produto.map(prod => <li>prod.name</li>
            )}
            </ul>
            </div>  
    <button>Remove to cart</button>
    
    </>
    );
}
//<button onClick={removeProduct}>Remove to cart</button>

const mapStateToProps = store => ({
    produto: store.product
  });

export default connect(mapStateToProps)(Carrinho);


