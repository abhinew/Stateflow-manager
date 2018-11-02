import { ADD_STATE } from '../actions/states';
import initialState from '../../src/initialState';

export default (state = initialState.stateList, {type, payload}) => {
    switch (type) {

        case ADD_STATE:
          return [
              ...state,
              payload
          ]
        default: 
        return state;
    }
}
