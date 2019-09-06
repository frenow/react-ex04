const initialState = {  
    product: [],
} 

export function Cart(state = initialState, action) { 
    switch (action.type) { 
        case 'ADD_PRODUCT':        
            return {...state, product: [...state.product, action.product] }        
        default:            
            return state   
    } 
}