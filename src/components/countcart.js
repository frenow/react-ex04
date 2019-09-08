import React from 'react';
import { connect } from 'react-redux';

const Countcart = (props) => (
  <span>({props.product.length})</span>
);

const mapStateToProps = store => ({
    product: store.product
  });

export default connect(mapStateToProps)(Countcart);