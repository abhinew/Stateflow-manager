// import state from "../reducers/state";
import * as request from 'superagent'
import {baseUrl} from '../constants'


export const CHANGE_STATE_ORDER = 'CHANGE_STATE_ORDER'
export const DELETE_STATE = 'DELETE_STATE'
export const GET_STATES = 'GET_STATES'
export const ADD_STATE = 'ADD_STATE'


export const addState = state => {
    return {
    type: ADD_STATE,
    payload: state
    }
}


// const deleteState = state => {
//     return {
//     type: DELETE_STATE,
//     payload: state
//     }
// }

export const changeStateOrder = state => {
    return {
    type: CHANGE_STATE_ORDER,
    payload: state
    }
}

const getStatesSuccess = (states) => ({
    type: GET_STATES,
    payload: states
})


export const getStates = () => (dispatch, getState) =>{

    const state = getState();

    request
      .get(`${baseUrl}/states`)
      .then(result=> dispatch( getStatesSuccess( result.body)))
      .catch(error => console.error(error))
    
}


export const createState = (name) => (dispatch, getState) =>{

    const state = getState()
    // if (!state.currentUserJWT) return null
    // const jwt = state.currentUserJWT.jwt
    
    return request
      .post(`${baseUrl}/state`)
      //.set('Authorization', `Bearer ${jwt}`)
      .send({name})
      .then(result=> dispatch(addState(result.body)))
      .catch(error=> console.error(error))
  
  }

 

  export const editState = (updatedState) => (dispatch, getState) => {
    // const state = getState();
    // const jwt = state.currentUser.jwt

    // if (isExpired(jwt)) return dispatch(logout())
  
    request
      .patch(`${baseUrl}/states/${updatedState.stateid}`)
      .set('Access-Control-Allow-Origin', '*')
      //.set('Authorization', `Bearer ${jwt}`)
      .send({name: updatedState.name})
      .then(_ => dispatch(getStates()))
      .catch(err => console.error(err))

}


export const deleteState = (stateid) => (dispatch, getState) =>{
    // const state = getState()
    // if (!state.currentUserJWT) return null
    // const jwt = state.currentUserJWT.jwt
    console.log("stateid", stateid)
    request
      .delete(`${baseUrl}/states/${stateid}`)
      //.set('Authorization', `Bearer ${jwt}`)
      .then(result=> dispatch( getStates() ))
      .catch(error => console.error(error))
  }