import { useBooks } from '../../contexts/books-context'
import classes from './BookCard.module.css'
import { categories } from '../../data/booksData'

const BookCard = ({ book, }) => {
    const { id, image, title, author } = book
    const { books, setBooks } = useBooks()

    const clickHandler = (bookId, category) => {
        const updatedBooks = books.map((book) => book.id === bookId ? { ...book, category: category } : book)
        setBooks(updatedBooks)
    }

    return (
        <li className={classes.bookCard}>
            <img src={image} alt='' />
            <h3> {title} </h3>
            <p> {author}</p>
            {
                categories.map((category) => (
                    <button onClick={() => clickHandler(id, category)} >{category} </button>
                ))
            }



        </li >
    )
}
export default BookCard