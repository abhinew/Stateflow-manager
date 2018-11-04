import { State } from './entity';
import { JsonController, Post, HttpCode, Body, Get, Param, OnUndefined, NotFoundError, Patch, Delete } from 'routing-controllers'
// import User from '../users/entity'

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



  @Patch('/states/:id')
  @OnUndefined(400)
  async updateState(
    @Param('id') stateId: number,
    @Body() update: Partial<State>
  ){

    const state = await State.findOneById(stateId);
  
    if (!state) {
      throw new NotFoundError('Cannot find state')
    } 
    // else {
    //   if (update.state_id !== undefined) {
    //     console.log("changing the id is not allowed")
    //     delete update.state_id
    //   }
    //   if (update.name !== undefined ) {
    //     return undefined
    //   }
    // }
    
    return State.merge(state, update).save()
  }
    
  //@Authorized()
  @Delete('/states/:stateid([0-9]+)')
  async deleteState(
    @Param('stateid') stateid : number,
    // @CurrentUser() user: User
  ){

    // if(!user) throw new UnauthorizedError("Please Login")

    const state = await State.findOneById(stateid)

    if(!state) throw new NotFoundError("State Not Found") ;

    // if(user.isAdmin){
      return state.remove()
    // }else{
    //   throw new UnauthorizedError("Only admins or state owners can delete a state")
    // }

  }

}
  
  