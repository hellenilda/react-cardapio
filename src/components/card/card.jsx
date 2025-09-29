import './card.css'

function Card(prop) {
    return (
        <div className="card">
            <img src={prop.image} alt={prop.title} />
            <h2>{prop.title}</h2>
            <p><b>Valor:</b> R$ {prop.price}</p>
        </div>
    )
}

export default Card