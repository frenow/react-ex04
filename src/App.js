import React from "react";
import { ApplicationRoutes } from "./ApplicationRoutes";
import { connect } from 'react-redux';
import { Provider } from 'react-redux';
import { Store } from './store';
import Menu from './components/menu'

class App extends React.Component {
  render(){
    //const {product} = this.props;
    //console.log(...product);
  return (
    <Provider store={Store}>
    <div>
      <Menu />
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
