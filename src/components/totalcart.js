import React from 'react';
import { connect } from 'react-redux';

const Totalcart = (props) => (
  <div>Total: ${props.product.reduce((partial_sum, a) => partial_sum + a.price,0)}</div>
);

const mapStateToProps = store => ({
    product: store.product
  });

export default connect(mapStateToProps)(Totalcart);