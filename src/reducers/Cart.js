import { ADD_PRODUCT } from '../actions/actionTypes';
import { REMOVE_PRODUCT } from '../actions/actionTypes';

const initialState = {  
    product: [],
}

export function Cart(state = initialState, action) { 
    switch (action.type) { 
        case ADD_PRODUCT: 
            console.log('passou no reducers add');       
            return {
                ...state, 
                product: [...state.product, action.product] 
            }            
            case REMOVE_PRODUCT: 
            console.log('passou no reducers remove');       
            return {
                ...state,
                product: state.product.filter(prod => prod !== action.product)
            }        
        default:            
            return state;
    } 
}