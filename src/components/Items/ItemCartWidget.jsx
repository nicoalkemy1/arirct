import { useState } from "react"


export const ItemCartWidget = () => {

    const [total, setTotal] = useState(0)

    const resta = () => {
        if (total <= 0) return
        setTotal(total - 1)
    }

    const suma = () =>
        setTotal(total + 1)

    return (
        <div>
            <button onClick={ resta }>-</button>
            { total }
            <button onClick={ suma }>+</button>
        </div>
    )
}