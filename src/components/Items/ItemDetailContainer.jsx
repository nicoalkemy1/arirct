import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";
import { clearScreen } from "../utils/domUtils";

export const ItemDetailContainer = () => {

    clearScreen('hidden')

    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    useEffect(() => {

        const getProduct = async () => {
            const res = await fetch('/data/data.json')
            const data = await res.json()

            const select = data.find(item =>
                item.id === Number(id))

            setProduct(select)
            setLoading(false)
        }

        if (loading) getProduct()

    }, [id, loading])


    return loading
        ? <div>Cargando...</div>
        : <ItemDetail product={ product } />

}