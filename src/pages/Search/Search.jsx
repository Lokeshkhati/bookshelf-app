import { useState } from "react"
import { Link } from "react-router-dom"
import classes from './Search.module.css'
import BookCard from "../../components/BookCard/BookCard"
import { useBooks } from "../../contexts/books-context"
const Search = () => {
    const [query, setQuery] = useState('')
    const { books } = useBooks()

    const foundBooks = books.filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))

    return (
        <>
            <div className={classes.searchbarContainer}>
                <div className={classes.searchbar}>
                    <input type='text' value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Search books by title..." />
                </div>
            </div>
            <ul>
                {
                    query && foundBooks.map((book) => (
                        <BookCard key={book.id} book={book} />
                    ))
                }
            </ul>
        </>
    )
}
export default Search