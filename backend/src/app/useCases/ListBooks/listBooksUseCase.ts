import { Book } from '@models/Book'
import { getRepository } from '@utils/getRepository'
import { IListBooksDTO } from './IListBooksDTO'

export function getListBooksUseCase() {
  async function handle({ userId }: IListBooksDTO) {
    const bookRepository = getRepository<Book>(Book)

    const books = await bookRepository.find({ userId })

    return books
  }

  return { handle }
}
