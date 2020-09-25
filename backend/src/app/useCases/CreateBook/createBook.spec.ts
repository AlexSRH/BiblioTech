import * as faker from 'faker'

import { getCreateUserUseCase } from '@useCases/CreateUser/createUserUseCase'
import { createConnection } from 'typeorm'
import { getCreateBookUseCase } from './createBookUseCase'

describe('Create Book Use Case', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  it('should create a book', async () => {
    const createUserUseCase = getCreateUserUseCase()
    const createBookUseCase = getCreateBookUseCase()

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

    expect(book).toHaveProperty('id')
  })
})
