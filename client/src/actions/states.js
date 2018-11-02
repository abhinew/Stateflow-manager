// import state from "../reducers/state";




export const ADD_STATE = 'ADD_STATE'
export const CHANGE_STATE_ORDER = 'CHANGE_STATE_ORDER'



export const addState = state => {
    return {
    type: ADD_STATE,
    payload: state
    }
}

export const changeStateOrder = states => {
    return {
    type: CHANGE_STATE_ORDER,
    payload: states
    }
}