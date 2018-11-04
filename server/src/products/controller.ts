import  Product  from './entity';
import { JsonController, Get } from 'routing-controllers'


@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find()
      let productsList = new Array();

      for (let iter = 0; iter < products.length; iter++) {
        let current = products[iter]
        
        let name = await products[iter].getStateName()
        let prod = {
          state: name
        }
        Object.assign(prod, current);
        productsList.push(prod)
      }
    return productsList;
    
  }


}