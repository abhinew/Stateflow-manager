// import state from "../reducers/state";




export const ADD_STATE = 'ADD_STATE'



export const addState = state => {
    return {
    type: ADD_STATE,
    payload: state
    }
  }