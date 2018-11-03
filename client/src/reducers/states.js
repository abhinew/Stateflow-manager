import { ADD_STATE, CHANGE_STATE_ORDER, UPDATE_STATE, DELETE_STATE } from '../actions/states';
import initialState from '../../src/initialState';

export default (state = initialState.stateList, {type, payload}) => {
     let newState = [ ...state];
    switch (type) {
        case ADD_STATE:
            let createdState = {
                name: payload,
                position: newState[newState.length - 1].position + 1
            }
            return newState.concat(createdState)

        case UPDATE_STATE:
            let element = newState.find(state => state.position === payload.position)
            let currentIndex = newState.indexOf(element)
            newState[currentIndex].name = payload.name;
            return newState
        
        case DELETE_STATE:
        console.log("payload", payload)
        console.log("payload", typeof(payload))

            return  newState.filter(state => state.name !== payload)

        case CHANGE_STATE_ORDER:
            let element1 = newState.find(state => state.name === payload[0]);
            let element2 = newState.find(state => state.name === payload[1]);
            let firstIndex = newState.indexOf(element1);
            let secondIndex = newState.indexOf(element2);
            newState[firstIndex].position = 2;
            newState[secondIndex].position = 1;

            return newState

        default: 
            return state;
    }
}
