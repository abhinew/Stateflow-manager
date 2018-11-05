import { ADD_STATE, CHANGE_STATE_ORDER, DELETE_STATE, GET_STATES } from '../actions/states';
// import initialState from '../../src/initialState';



export default (state = [], {type, payload}) => {

     let newState = [ ...state];

    switch (type) {
        case ADD_STATE:
        return newState.concat(payload)


        case GET_STATES:
            return payload;
 
        // case DELETE_STATE:
        //     return  newState.filter(state => state.name !== payload)

        case CHANGE_STATE_ORDER:
              let element1 = newState.find(state => state.name === payload.name);
             let element2 = newState.find(state => state.position === payload.position + 1);
             let firstIndex = newState.indexOf(element1);
            let secondIndex = newState.indexOf(element2);
            newState[firstIndex].position += 1;
            newState[secondIndex].position -= 1;

            return newState

        default: 
            return state;
    }
}
