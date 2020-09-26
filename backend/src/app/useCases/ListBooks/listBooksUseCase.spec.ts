import * as faker from 'faker'
import { createConnection } from 'typeorm'

import { getCreateUserUseCase } from '@useCases/CreateUser/createUserUseCase'
import { getListBooksUseCase } from './listBooksUseCase'
import { getCreateBookUseCase } from '@useCases/CreateBook/createBookUseCase'

describe('List Books Use Case', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  it('should create a book', async () => {
    const createUserUseCase = getCreateUserUseCase()
    const createBookUseCase = getCreateBookUseCase()
    const listBookUseCase = getListBooksUseCase()

    const data = await createUserUseCase.handle({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    const book = await createBookUseCase.handle({
      name: faker.lorem.sentence(),
      author: faker.name.findName(),
      userId: data.user.id,
      description: faker.lorem.paragraph()
    })

    const [firstBook] = await listBookUseCase.handle({ userId: data.user.id })

    expect(firstBook.name).toBe(book.name)
  })
})
