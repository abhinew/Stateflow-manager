import { BaseEntity, PrimaryGeneratedColumn, Column, Entity, OneToMany} from 'typeorm'
import Product  from '../products/entity';

@Entity()
export class State extends BaseEntity {

  @PrimaryGeneratedColumn()
  stateid: number

  @Column('text')
  name: string

  @Column()
  position: number

  @OneToMany(_=> Product, product=>product.state)
  products: Product[]

  static getMaxPosition() {
    return this.createQueryBuilder("state")
                .select('max(state.position) as "position"')
                .getRawOne();
                
  }
}



