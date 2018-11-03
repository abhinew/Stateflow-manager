import { State } from './entity';
import { JsonController, Post, HttpCode, Body, Get } from 'routing-controllers'
  
  @JsonController()
  export default class StateController {

    @Get("/states")
    async getStates() {
      const states = await State.find()
      
      return states
    }

    // @Authorized()
    @Post('/state')
    @HttpCode(201)
     createState(
      @Body() state: State
    ) {
      let maxPosition =  State.getMaxPosition();
      console.log(maxPosition);
      if (maxPosition) {
        state.position = maxPosition; 

      }
      else {
        state.position = maxPosition; 

      }
      return state.save()
      }
  
   

  }
  
  