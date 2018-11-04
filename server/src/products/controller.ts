import { Product } from './entity';
import { JsonController, Get } from 'routing-controllers'
// import User from '../users/entity'

@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find()
    
    return products
  }
}