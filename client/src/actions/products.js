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




export const getProducts = () => (dispatch, getState) =>{

  const state = getState();

  request
    .get(`${baseUrl}/products`)
    .then(result=> dispatch( getProductsSuccess( result.body)))
    .catch(error => console.error(error))
  
}

export const moveToNextState = (product) => (dispatch, getState) => {
  request
  .patch(`${baseUrl}/products/${product.productid}`)
  .set('Access-Control-Allow-Origin', '*')
  .then(_ => dispatch(getProducts()))
  .catch(err => console.error(err))
}

