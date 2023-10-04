import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import { ItemDetail } from "./ItemDetail";

export const ItemDetailContainer = () => {

    const { id } = useParams()

    const [loading, setLoading] = useState(true)
    const [product, setProduct] = useState([])

    const getProduct = async () => {
        const res = await fetch('/data/data.json')
        const data = await res.json()

        const select = data.find(item =>
            item.id === Number(id))

        setProduct(select)
        setLoading(false)
    }

    useEffect(() => {
        if (loading) getProduct()
    }, [loading])

    // console.log(product);

    document.querySelector('body').style.overflowY = 'hidden'

    return loading ? <div>Cargando...</div>
        : <ItemDetail product={ product } />

}