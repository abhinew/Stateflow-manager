import { GET_PRODUCTS } from '../actions/products';


export default (state = [], {type, payload}) => {
     let newState = [ ...state]
    switch (type) {
        case GET_PRODUCTS:
            
            return payload;    
 
        default: 
            return state;
    }
}
