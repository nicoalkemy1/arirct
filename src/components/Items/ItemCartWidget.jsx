import { useState } from "react"


export const ItemCartWidget = ({ max }) => {

    const [total, setTotal] = useState(0)

    const resta = () =>
        total > 1 && setTotal(total - 1)


    const suma = () =>
        total < max && setTotal(total + 1)

    return (
        <>
            <div className="cart-widget">
                <button onClick={ resta }>-</button>
                <span>{ total }</span>
                <button onClick={ suma }>+</button>
            </div>
            <button className="cart_buy-button">Comprar</button>
        </>

    )
}