export const GET_PRODUCTS = 'GET_PRODUCTS'
export const MOVE_TO_NEXT_STATE = 'MOVE_TO_NEXT_STATE'

export const getProducts = () => {
    return {
      type: GET_PRODUCTS,
    //   payload: products
    }
}

export const moveToNextState = (product) => {
    return {
      type: MOVE_TO_NEXT_STATE,
      payload: product
    }
}