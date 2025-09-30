import { useEffect, useState } from "react"
import "./modal.css"
import { useFoodDataMutate } from "../../hooks/useFoodDataMutate"

const Input = ({ label, value, updateValue }) => {
    return (
        <>
            <label >{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

export function CreateModal({ isOpen, setModalOpen }) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const { mutate, isSuccess, isLoading } = useFoodDataMutate()

    const submit = () => {
        const foodData = {
            title,
            price,
            image
        }

        mutate(foodData)
    }

    useEffect(() => {
        if (isSuccess) {
            setModalOpen(false)
        }
    }, [isSuccess, setModalOpen])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>Cadastre um novo item no cardápio</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                </form>
                <div className="btn-container">
                    <button onClick={submit} className="btn-secondary">
                        {isLoading ? 'Postando...' : 'Postar'}
                    </button>
                    <button onClick={() => setModalOpen(false)} className="btn-primary">Cancelar</button>
                </div>
            </div>
        </div>
    )
}