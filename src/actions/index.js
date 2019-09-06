export function addProduct(product) { 
    return {    
        type: 'ADD_PRODUCT',     
        product   
    } 
}

export function removeProduct(product) { 
    return {    
        type: 'REMOVE_PRODUCT',     
        product   
    } 
}