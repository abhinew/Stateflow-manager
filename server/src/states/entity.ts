import { BaseEntity, PrimaryGeneratedColumn, Column, Entity} from 'typeorm'

@Entity()
export class State extends BaseEntity {

  @PrimaryGeneratedColumn()
  stateid: number

  @Column('text')
  name: string

  @Column()
  position: number

  static getMaxPosition() {
    return this.createQueryBuilder("state")
                .select('max(state.position) as "position"')
                .getRawOne();
                
  }
}



