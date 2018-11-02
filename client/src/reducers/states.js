import { ADD_STATE } from '../actions/states';

export default (state = [], {type, payload}) => {
    let newState = state.slice();
    switch (type) {

        case ADD_STATE:
          return newState.concat(payload)
        default: 
        return state;
    }
}
