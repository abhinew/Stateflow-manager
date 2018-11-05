import { ADD_STATE, GET_STATES } from '../actions/states';
// import initialState from '../../src/initialState';



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
