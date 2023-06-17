import { useState } from 'react';
import BookCard from '../../components/BookCard/BookCard';
import classes from './Home.module.css'
import { useBooks } from '../../contexts/books-context';
const Home = () => {

    const { books } = useBooks()
    const currentReadingBooks = books.filter(book => book.category === 'Currently Reading')
    const wantToReadBooks = books.filter(book => book.category === 'Want to Read')
    const readBooks = books.filter(book => book.category === 'Read')


    return (
        <>
            <div>
                <h1>Currently Reading</h1>
                <ul className={classes.booksContainer}>
                    {
                        currentReadingBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))
                    }
                </ul>

            </div>
            <div>
                <h1>Want to Read</h1>
                <ul className={classes.booksContainer}>
                    {
                        wantToReadBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))
                    }
                </ul>

            </div>
            <div>
                <h1>Read</h1>
                <ul className={classes.booksContainer}>
                    {
                        readBooks.map((book) => (
                            <BookCard key={book.id} book={book} />
                        ))
                    }
                </ul>

            </div>
        </>
    )
}
export default Home