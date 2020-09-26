import { Book } from '@models/Book'
import { getRepository } from '@utils/getRepository'
import { IRemoveBookDTO } from './IRemoveBookDTO'

export function getRemoveBookUseCase() {
  async function handle({ userId, bookId }: IRemoveBookDTO) {
    const bookRepository = getRepository<Book>(Book)

    const book = await bookRepository.findOne({ id: bookId })

    if (book.userId !== userId) {
      throw new Error('Unauthorized')
    }

    await bookRepository.delete(book)
  }

  return { handle }
}
