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

    expect(response.body).toHaveProperty('token')
    expect(response.status).toBe(201)
  })

  it('should authenticate a user already created', async () => {
    const { app } = getApp()

    const userData = {
      name: faker.name.findName(),
      email: faker.internet.email(),
      password: faker.internet.password()
    }

    await request(app).post('/users').send(userData)

    const response = await request(app)
      .post('/sessions')
      .send({ ...userData, name: undefined })

    expect(response.body).toHaveProperty('token')
    expect(response.status).toBe(200)
  })
})
