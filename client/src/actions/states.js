// import state from "../reducers/state";

export const ADD_STATE = 'ADD_STATE'
export const CHANGE_STATE_ORDER = 'CHANGE_STATE_ORDER'
export const UPDATE_STATE = 'UPDATE_STATE'
export const DELETE_STATE = 'DELETE_STATE'



export const addState = state => {
    return {
    type: ADD_STATE,
    payload: state
    }
}

export const updateState = state => {
    console.log("state", state)
    return {
    type: UPDATE_STATE,
    payload: state
    }
}

export const deleteState = state => {
    console.log("state", state)
    return {
    type: DELETE_STATE,
    payload: state
    }
}



export const changeStateOrder = state => {
    console.log(state);
    return {
    type: CHANGE_STATE_ORDER,
    payload: state
    }
}

