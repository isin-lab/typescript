abstract class BooksRepository {
	abstract createBook(book: Book): void
	abstract getBook(id: number): Book | undefined
	abstract getBooks(): Book[]
	abstract updateBook(id: number, updatedBook: Book): void
	abstract deleteBook(id: number): void
}

interface Book {
	id: number
	title: string
	author: string
	publicationYear: number
}

