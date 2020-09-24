import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm'

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number

  @Column()
  name: string

  @Column()
  email: string

  @Column({ name: 'password_hash' })
  password: string

  constructor(props?: Omit<User, 'id'>) {
    props && Object.assign(this, props)
  }
}
