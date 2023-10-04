import { Link } from "react-router-dom";
import { Item } from "../Item";

export const allProducts = items => items.map(item =>
    <Link key={ item.id } to={ `/item/${item.id}` }>
        <Item
            marca={ item.marca }
            precio={ item.precio }
            imagen={ item.imagen } />
    </Link>)


export const selectedCategory = (items, id) => items
    .filter(item =>
        item.categoria.toLowerCase() === id.toLowerCase())
    .map(item =>
        <Link key={ item.id } to={ `/item/${item.id}` }>
            <Item
                marca={ item.marca }
                precio={ item.precio }
                imagen={ './.' + item.imagen } />
        </Link>)


export const generateCategory = (categoria) => {
    const param = categoria.toLowerCase()
    const link = <Link to={ `/category/${param}` }>{ categoria }</Link>
    return <u><i>Categoría: { link }</i></u>
}