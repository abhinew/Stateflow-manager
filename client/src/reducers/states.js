import { ADD_STATE, GET_STATES } from '../actions/states';



export default (state = [], {type, payload}) => {

     let newState = [ ...state];

    switch (type) {
        case ADD_STATE:
        return newState.concat(payload)

        case GET_STATES:
            return payload;
 
        default: 
            return state;
    }
}
