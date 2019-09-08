import { createStore } from 'redux';
import Cart from '../reducers/cart';

export const Store = createStore(Cart);