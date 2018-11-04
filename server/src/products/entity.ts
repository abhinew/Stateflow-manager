import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, ManyToOne, JoinColumn} from 'typeorm'
import { State } from '../states/entity';

@Entity()
export default class Product extends BaseEntity {

  @PrimaryGeneratedColumn()
  productid: number

  @Column()
  stateid: number
   
  @ManyToOne(_=>State, state=> state.products, {onDelete:"CASCADE"})
  @JoinColumn({name: 'stateid'})
  state: State;
  
  getStateName = async () => {
    const state = await State.findOneById(this.stateid);
    if (!state) {
      return "";
    }
    return state.name;
  }

}



