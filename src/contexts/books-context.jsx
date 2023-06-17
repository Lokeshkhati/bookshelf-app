import { createContext, useContext, useState } from "react";
import { booksData } from "../data/booksData";

const BooksContext = createContext()

const BooksProvider = ({ children }) => {
    const [books, setBooks] = useState(booksData)

    return <BooksContext.Provider value={{ books, setBooks }}>{children} </BooksContext.Provider>

}


const useBooks = () => useContext(BooksContext)


export { BooksProvider, useBooks }