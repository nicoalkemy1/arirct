import { useEffect, useState } from "react"
import { Item } from "./Item"
import { Link, useParams } from "react-router-dom"

const css = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}

export const ItemListContainer = () => {

    // const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const createProductsList = (list) => {
        const result = []
        const map = list.forEach(item => {
            if (!result.includes(item.categoria))
                result.push(item.categoria)
        })
        return map
    }

    const getProducts = async () => {
        const res = await fetch('/data/data.json')
        const data = await res.json()

        const list = createProductsList(data)
        console.log({ list });

        setProducts(data)
        setLoading(false)
    }

    useEffect(() => {
        if (loading) getProducts()
    }, [loading])

    document.querySelector('body').style.overflowY = 'auto'

    if (loading)
        return <div>Cargando...</div>
    else
        return (
            <div style={ css }>
                { products.map(item =>
                    <Link key={ item.id } to={ `/item/${item.id}` }>
                        <Item
                            marca={ item.marca }
                            precio={ item.precio }
                            imagen={ item.imagen } />
                    </Link>) }
            </div>
        )

}