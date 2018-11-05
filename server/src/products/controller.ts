import  Product  from './entity';
import { JsonController, Get, Param } from 'routing-controllers'


@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find()

    return products
    
  }

  @Get("/products/:productid([0-9]+)/state")
  async getProduct(
    @Param('productid') productid: number,

  ) {
    const product = await Product.findOneById(productid, {relations: ["state"]})
    
    return product
    
  }



}