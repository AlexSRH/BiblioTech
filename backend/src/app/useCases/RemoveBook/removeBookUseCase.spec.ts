import * as faker from 'faker'
import { createConnection } from 'typeorm'

import { getCreateBookUseCase } from '@useCases/CreateBook/createBookUseCase'
import { getCreateUserUseCase } from '@useCases/CreateUser/createUserUseCase'
import { getListBooksUseCase } from '@useCases/ListBooks/listBooksUseCase'
import { getRemoveBookUseCase } from './removeBookUseCase'

describe('Remove Book Use Case', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  it('should remove a book', async () => {
    const createUserUseCase = getCreateUserUseCase()
    const createBookUseCase = getCreateBookUseCase()
    const removeBookUseCase = getRemoveBookUseCase()
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

    await removeBookUseCase.handle({ userId: data.user.id, bookId: book.id })

    const books = await listBookUseCase.handle({ userId: data.user.id })

    expect(books[0]).toBeUndefined()
  })
})
