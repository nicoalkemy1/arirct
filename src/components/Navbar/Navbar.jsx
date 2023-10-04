import { Link } from "react-router-dom"
import { menu } from "./config"

export const Navbar = () => {


    const styles = {
        backgroundColor: 'blueviolet',
        justifyContent: 'space-around',
        display: 'flex',
        color: 'white',
    }

    return (
        <nav>
            <ul style={ styles }>
                { menu.map((page) =>
                    <Link
                        key={ page.id }
                        to={ page.link } >
                        { page.name }
                    </Link>)
                }
            </ul>
        </nav>
    )
}
