import React from "react";
import { Link } from "react-router-dom";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Store } from './store';

class App extends React.Component {
  render(){
    const {product} = this.props;
    console.log(...product);
  return (
    <Provider store={Store}>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Product">Product</Link>
        </li>
        <li>
          <Link to="/Carrinho">Cart</Link>
        </li>
      </ul>
      <ApplicationRoutes />
    </div>
    </Provider>
  );
  }
}
const mapStateToProps = store => ({
  product: store.product
});
export default connect(mapStateToProps)(App);
