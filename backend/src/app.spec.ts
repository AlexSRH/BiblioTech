// e2e tests

import { createConnection } from 'typeorm'

import * as faker from 'faker'
import request from 'supertest'

import { getApp } from './app'

describe('App', () => {
  beforeAll(async () => {
    await createConnection('test')
  })

  it('should create a user', async () => {
    const { app } = getApp()

    const response = await request(app).post('/users').send({
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    })

    expect(response.status).toBe(201)
  })
})
