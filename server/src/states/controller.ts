import  State  from './entity';
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
    console.log("state", state)
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
    console.log("update", update);
    const state = await State.findOneById(stateId);
  
    if (!state) {
      throw new NotFoundError('Cannot find state')
    } 
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

  @Patch('/states/:id')
  @OnUndefined(400)
  async changeStateOrder(
    @Param('id') stateid: number,
  ){
    const state = await State.findOneById(stateid);
    if (!state) throw new NotFoundError('Cannot find state')
    const previousState = await State.findOne({position : state.position - 1})
    if (!previousState) throw new NotFoundError('Cannot find state')

    Object.assign(state, { position: state.position - 1 })
    Object.assign(previousState, { position: previousState.position + 1});
    return state.save(),previousState.save()
  }

}
  
  