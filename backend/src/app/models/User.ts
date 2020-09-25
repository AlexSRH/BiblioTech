import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm'
import { Book } from './Book'

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

  @OneToMany((type) => Book, (book) => book.userId)
  books: Book[]

  constructor(props?: Omit<User, 'id'>) {
    props && Object.assign(this, props)
  }
}
