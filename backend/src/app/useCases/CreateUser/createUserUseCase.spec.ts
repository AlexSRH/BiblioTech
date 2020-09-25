import bcrypt from 'bcryptjs'
import * as faker from 'faker'
import { createConnection } from 'typeorm'

import { getCreateUserUseCase } from './createUserUseCase'

describe('CreateUserUseCase', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  it('should create a user', async () => {
    const createUserUseCase = getCreateUserUseCase()
    const email = faker.internet.email()

    const data = await createUserUseCase.handle({
      name: faker.name.findName(),
      email,
      password: faker.internet.password()
    })

    expect(data.user.email).toBe(email)
  })

  it('should not create a duplicated user', async () => {
    const createUserUseCase = getCreateUserUseCase()
    const email = faker.internet.email()

    await createUserUseCase.handle({
      name: faker.name.findName(),
      email,
      password: faker.internet.password()
    })

    try {
      await createUserUseCase.handle({
        name: faker.name.findName(),
        email,
        password: faker.internet.password()
      })
    } catch (err) {
      expect(err).not.toBeNull()
    }
  })

  it("should encrypt user's password", async () => {
    const createUserUseCase = getCreateUserUseCase()
    const email = faker.internet.email()
    const password = faker.internet.password()

    const data = await createUserUseCase.handle({
      name: faker.name.findName(),
      email,
      password
    })

    const comparedHash = await bcrypt.compare(password, data.user.password)

    expect(data.user.email).toBe(email)
    expect(comparedHash).toBe(true)
  })
})
