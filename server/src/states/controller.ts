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
     async createState(
      @Body() state: State
    ) {
      let statePosition = await State.getMaxPosition();
      let lastPosition = statePosition.position;
      console.log("statePosition", statePosition);
      if (lastPosition <= 0) {
        lastPosition = 1
        state.position = lastPosition; 

      }
      else {
        state.position = lastPosition + 1; 

      }
      return state.save()
      }
  
   

  }
  
  