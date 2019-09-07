import { ADD_PRODUCT } from '../actions/actionTypes';
import { REMOVE_PRODUCT } from '../actions/actionTypes';

export function addProduct(product) { 
    return {    
        type: ADD_PRODUCT,     
        product: product   
    } 
}

export function removeProduct(product) { 
    return {    
        type: REMOVE_PRODUCT,     
        product: product  
    } 
}