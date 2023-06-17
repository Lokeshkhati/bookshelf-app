import { Link, NavLink } from 'react-router-dom'
import classes from './Navbar.module.css'

const Navbar = () => {
    return (
        <header className={classes.header}>
            <Link className={classes.link} >
                <h2 className={classes.logo}>Book-Shelf</h2>
            </Link>
            <nav>
                <NavLink to='/' >Home</NavLink>
                <NavLink to='/search' >Search</NavLink>
            </nav>
        </header>
    )
}
export default Navbar