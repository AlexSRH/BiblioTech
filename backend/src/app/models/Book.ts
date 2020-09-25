import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('books')
export class Book {
  @PrimaryGeneratedColumn()
  id: number

  @Column({ name: 'user_id' })
  userId: number

  @Column()
  name: string

  @Column()
  author: string

  @Column({ nullable: true })
  description?: string

  constructor(props?: Omit<Book, 'id'>) {
    props && Object.assign(this, props)
  }
}
