import { GET_PRODUCTS, MOVE_TO_NEXT_STATE } from '../actions/products';

import initialState from '../../src/initialState';

export default (state = initialState.products, {type, payload}) => {
     let newState = [ ...state]
    switch (type) {
        case GET_PRODUCTS:
            
            return newState;    
        case MOVE_TO_NEXT_STATE:
            
            return newState;  
        default: 
            return state;
    }
}
