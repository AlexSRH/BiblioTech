import { IAddBookDTO } from './IAddBookDTO'

import { getRepository } from '@utils/getRepository'
import { Book } from '@models/Book'

export function getAddBookUseCase() {
  async function handle(props: IAddBookDTO) {
    const bookRepository = getRepository<Book>(Book)
    const book = new Book(props)

    try {
      const savedBook = await bookRepository.save(book)

      return savedBook
    } catch {
      throw new Error("User doesn't exists")
    }
  }

  return { handle }
}
