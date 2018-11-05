import * as request from 'superagent'
import {baseUrl} from '../constants'


export const GET_PRODUCTS = 'GET_PRODUCTS'
export const MOVE_TO_NEXT_STATE = 'MOVE_TO_NEXT_STATE'

const getProductsSuccess = (products) => {
  console.log(products);
    return {
      type: GET_PRODUCTS,
      payload: products
    }
}

export const moveToNextState = (product) => {
    return {
      type: MOVE_TO_NEXT_STATE,
      payload: product
    }
}


export const getProducts = () => (dispatch, getState) =>{

  const state = getState();

  request
    .get(`${baseUrl}/products`)
    .then(result=> dispatch( getProductsSuccess( result.body)))
    .catch(error => console.error(error))
  
}