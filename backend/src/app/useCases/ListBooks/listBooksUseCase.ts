import { getRepository } from 'typeorm'

import { Book } from '@models/Book'
import { IListBooksDTO } from './IListBooksDTO'

export function getListBooksUseCase() {
  async function handle({ userId }: IListBooksDTO) {
    const bookRepository = getRepository<Book>(Book)
    console.log(userId)

    const books = await bookRepository.find({ userId })

    return books
  }

  return { handle }
}
