const initialState = {  
    visibilityFilter: VisibilityFilters.SHOW_ALL,   
    products: [] 
} 
function Cart(state = initialState, action) { 
    switch (action.type) { 
        case 
        SET_VISIBILITY_FILTER:        
        return {... state, visibilityFilter: action.filter }        
        default:            
        return state   
    } 
}