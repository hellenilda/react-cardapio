import './card.css'

function Card(prop) {
    return (
        <div className="card">
            <img src={prop.image} alt={prop.title} />
            <h2>{prop.title}</h2>
            <p><b>Valor:</b> R$ {prop.price}</p>
            <div className="card-actions">
                <button className='edit-btn' onClick={() => prop.onEdit(prop.id)}>Editar</button>
                <button className='delete-btn' onClick={() => prop.onDelete(prop.id)}>Remover</button>
            </div>
        </div>
    )
}

export default Card