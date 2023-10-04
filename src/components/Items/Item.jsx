export const Item = ({ marca, precio, imagen }) => {

    return (
        <div className="card">
            <img src={ imagen } alt="" />
            <h4>{ marca }</h4>
            <h6>${ precio }</h6>
        </div>
    )
}