import { ItemCartWidget } from "./ItemCartWidget"
import { generateCategory } from "./helpers/renderHelpers"

const css = {
    backgroundColor: '#ececec',
    display: 'flex',
    height: '100vh',
    width: '100vw'
}

const imgContainer = {
    width: '50%'
}

const imgCss = {
    height: '100%',
    objectFit: 'cover'
}

const dataContainer = {
    width: '50%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 2rem'
}

export const ItemDetail = ({ product }) =>

    <div style={ css }>

        <div style={ imgContainer }>
            <img style={ imgCss } src={ product.imagen.substring(1) } alt="" />
        </div>

        <div style={ dataContainer }>
            <h2>{ product.marca }</h2>
            <br />
            <h3>{ generateCategory(product.categoria) }</h3>
            <p>Descripción: { product.descripcion }</p>
            <br />
            <h6>Stock: { product.stock }</h6>
            <h4>Precio: ${ product.precio }</h4>
            <ItemCartWidget max={ Number(product.stock) } />
        </div>
    </div>
