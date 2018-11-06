import  Product  from './entity';
import { JsonController, Get, Param, Patch, NotFoundError } from 'routing-controllers'
import  State  from '../states/entity';



@JsonController()
export default class ProductController {

  @Get("/products")
  async getProducts() {
    const products = await Product.find();
    
    return products
    
  }

  @Patch("/products/:productid([0-9]+)")
  async moveToNextState(
    @Param('productid') productid: number,
  ) {
    const product = await Product.findOneById(productid);
    if(!product) throw new NotFoundError("product Not Found") ;

    const state = await State.findOneById(product.stateid);
    if (!state) throw new NotFoundError;

    const nextPosition = state.position + 1;

    const nextstate = await State.findOne({ where : {position : nextPosition}})

    if (!nextstate) throw new NotFoundError("state Not Found");

    Object.assign(product,{stateid : nextstate.stateid});
    
    console.log(product);

    return product.save();
   
  }

}