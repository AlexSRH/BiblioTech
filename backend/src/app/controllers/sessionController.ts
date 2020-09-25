import { getLoginUseCase } from '@useCases/Login/loginUseCase'
import { Request, Response } from 'express'

export function getSessionController() {
  async function store(request: Request, response: Response) {
    const { email, password } = request.body
    const loginUseCase = getLoginUseCase()

    try {
      const data = await loginUseCase.handle({ email, password })

      return response.json(data)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Unexpected error' })
    }
  }

  return { store }
}
