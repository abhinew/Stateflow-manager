import { BaseEntity, Entity, PrimaryGeneratedColumn, Column } from 'typeorm'
import { Exclude } from 'class-transformer';
import { MinLength, IsString, IsEmail } from 'class-validator';
import * as bcrypt from 'bcrypt'
// import Ticket from '../tickets/entity';
// import Comment from '../comments/entity';

@Entity()
export default class User extends BaseEntity {

  @PrimaryGeneratedColumn()
  id: number

  @IsString()
  @MinLength(2)
  @Column('text')
  fullName: string

  @IsEmail()
  @Column('text')
  email: string

  @Column('boolean', {default:false})
  isAdmin: boolean

  @IsString()
  @MinLength(4)
  @Column('text')
  @Exclude({ toPlainOnly: true })
  password: string

  async setPassword(rawPassword: string) {
    const hash = await bcrypt.hash(rawPassword, 10)
    this.password = hash
  }

  checkPassword(rawPassword: string): Promise<boolean> {
    return bcrypt.compare(rawPassword, this.password)
  }

}