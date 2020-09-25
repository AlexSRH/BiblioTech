import * as faker from 'faker'
import { createConnection } from 'typeorm'

import { getLoginUseCase } from './loginUseCase'
import { getCreateUserUseCase } from '@useCases/CreateUser/createUserUseCase'

describe('Login Use Case', () => {
  const userData = {
    name: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password()
  }

  beforeAll(async () => {
    await createConnection('test')

    const createUserUseCase = getCreateUserUseCase()
    await createUserUseCase.handle(userData)
  })

  it('should authenticate and receive a JWT token', async () => {
    const loginUseCase = getLoginUseCase()

    const data = await loginUseCase.handle(userData)

    expect(data).toHaveProperty('token')
    expect(data).toHaveProperty('user')
  })

  it('should not authenticate with wrong password', async () => {
    const loginUseCase = getLoginUseCase()

    const wrongUserPassword = { ...userData, password: 'wrong password' }

    loginUseCase.handle(wrongUserPassword).catch((err) => {
      expect(err.message).toBe('Incorrect password')
    })
  })

  it('should not authenticate a user that not exists', async () => {
    const loginUseCase = getLoginUseCase()

    loginUseCase.handle({ email: '123', password: '123' }).catch((err) => {
      expect(err.message).toBe("User doesn't exist")
    })
  })
})
