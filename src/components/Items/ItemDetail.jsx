import { ItemCartWidget } from "./ItemCartWidget"

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
    justifyContent: 'center'
}

export const ItemDetail = ({ product }) =>

    <div style={ css }>

        <div style={ imgContainer }>
            <img style={ imgCss } src={ product.imagen.substring(1) } alt="" />
        </div>

        <div style={ dataContainer }>
            <h2>{ product.marca }</h2>
            <h3><u><i>Categoría: { product.categoria }</i></u></h3>
            <p>Descripción: { product.descripcion }</p>
            <h6>Stock: { product.stock }</h6>
            <h4>Precio: ${ product.precio }</h4>
            <ItemCartWidget />
        </div>
    </div>
