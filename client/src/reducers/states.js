import { ADD_STATE, CHANGE_STATE_ORDER, DELETE_STATE, GET_STATES } from '../actions/states';
// import initialState from '../../src/initialState';



export default (state = [], {type, payload}) => {

     let newState = [ ...state];

    switch (type) {
        case ADD_STATE:
        return newState.concat(payload)


        case GET_STATES:
            return payload;
 


        case CHANGE_STATE_ORDER:
   
            return newState

        default: 
            return state;
    }
}
