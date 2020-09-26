import { Request, Response } from 'express'

import { getCreateBookUseCase } from '@useCases/CreateBook/createBookUseCase'
import { getListBooksUseCase } from '@useCases/ListBooks/listBooksUseCase'
import { getRemoveBookUseCase } from '@useCases/RemoveBook/removeBookUseCase'

export function getBookController() {
  async function index(request: Request, response: Response) {
    const userId = request.userId
    const showListBooksUseCase = getListBooksUseCase()

    try {
      const books = await showListBooksUseCase.handle({ userId })

      return response.json(books)
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Unexpected Error' })
    }
  }

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

  async function remove(request: Request, response: Response) {
    const { id } = request.params
    const userId = request.userId

    const removeBookUseCase = getRemoveBookUseCase()

    try {
      await removeBookUseCase.handle({ userId, bookId: Number(id) })

      return response.status(204).send()
    } catch (err) {
      return response
        .status(400)
        .json({ message: err.message || 'Unexpected error' })
    }
  }

  return { index, store, remove }
}
