import { Request, Response } from 'express'

import { getCreateBookUseCase } from '@useCases/CreateBook/createBookUseCase'

export function getBookController() {
  async function store(request: Request, response: Response) {
    const { name, author, description } = request.body
    const userId = request.userId

    const createBook = getCreateBookUseCase()

    try {
      await createBook.handle({ userId, name, author, description })

      return response.status(201).send()
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Unexpected Error' })
    }
  }

  return { store }
}
