import { Request, Response } from 'express'

import { getAddBookUseCase } from '@useCases/AddBook/addBookUseCase'

export function getBookController() {
  async function store(request: Request, response: Response) {
    const { userId, name, author, description } = request.body

    const createBook = getAddBookUseCase()

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
