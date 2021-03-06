import { Request, Response } from 'express'
import { getCreateUserUseCase } from '@useCases/CreateUser/createUserUseCase'

export function getUserController() {
  async function store(request: Request, response: Response) {
    const { name, email, password } = request.body

    const createUserUseCase = getCreateUserUseCase()

    try {
      const data = await createUserUseCase.handle({ name, email, password })

      return response.status(201).json(data)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Unexpected error' })
    }
  }

  return { store }
}
