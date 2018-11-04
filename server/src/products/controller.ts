import  Product  from './entity';
import { JsonController, Get } from 'routing-controllers'



@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find()
      var productsList = new Array();

      for (var iter = 0; iter < products.length; iter++) {
        var current = products[iter]
        
        let name = await products[iter].getStateName()
        var prod = {
          state: name
        }
        Object.assign(prod, current);
        productsList.push(prod)
      }
    return productsList;
    
  }


}