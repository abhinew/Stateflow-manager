import  Product  from './entity';
import { JsonController, Get } from 'routing-controllers'


@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find()

    return products
    
  }

  // @Get("/products/:productid([0-9]+)")
  // async moveToNextState(
  //   @Param('productid') productid: number,

  // ) {
  //   const product = await Product.findOneById(productid, {relations: ["state"]});
  //   let currentPosition = product.state.position;
  //   console.log(currentPosition);
  //   product.state.position++;
  //   return product.save();
    
  // }

}