import { GET_PRODUCTS, MOVE_TO_NEXT_STATE } from '../actions/products';


export default (state = [], {type, payload}) => {
     let newState = [ ...state]
    switch (type) {
        case GET_PRODUCTS:
            
            return payload;    
        case MOVE_TO_NEXT_STATE:
            
            return newState;  
        default: 
            return state;
    }
}
