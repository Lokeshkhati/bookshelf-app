import { useBooks } from "../../contexts/books-context"
import { categories } from "../../data/booksData"

const Dropdown = () => {
    const { selectedCategory, setSelectedCategory } = useBooks()


    const changeHandler = (event) => {
        setSelectedCategory(event.target.value)
    }

    return (
        <select value={selectedCategory}
            onChange={changeHandler}>
            <option >Move to...</option>
            {
                categories.map((category) => (
                    <option key={category} value={category}>{category} </option>
                ))
            }
        </select>
    )
}
export default Dropdown