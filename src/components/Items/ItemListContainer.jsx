import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { clearScreen } from "../utils/domUtils"
import { allProducts, selectedCategory } from "./helpers/renderHelpers"

const css = {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
}

export const ItemListContainer = () => {

    clearScreen('auto')

    const { id } = useParams()

    const [list, setList] = useState([])
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])


    const createProductsList = (items) => {
        let result = []
        items.forEach(item => {
            if (!result.includes(item.categoria))
                result = [...result, item.categoria.toLowerCase()]
        })
        setList(result)
    }


    useEffect(() => {

        const getProducts = async () => {
            const res = await fetch('/data/data.json')
            const data = await res.json()

            createProductsList(data)
            setProducts(data)
            setLoading(false)
        }

        if (loading) getProducts()

    }, [loading])


    return loading
        ? <div>Cargando...</div>
        : list.includes(id)
            ? <div style={ css }> { selectedCategory(products, id) } </div>
            : <div style={ css }> { allProducts(products) } </div>
}