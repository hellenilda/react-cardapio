import { useEffect, useState } from "react"
import "./modal.css"
import { useFoodDataMutate, useFoodDataUpdate } from "../../hooks/useFoodDataMutate"

const Input = ({ label, value, updateValue }) => {
    return (
        <>
            <label >{label}</label>
            <input value={value} onChange={event => updateValue(event.target.value)} />
        </>
    )
}

export function CreateModal({ isOpen, setModalOpen, isEditMode, editingItem }) {
    const [title, setTitle] = useState("")
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState("")
    const { mutate: createMutate, isSuccess: createSuccess, isLoading: createLoading } = useFoodDataMutate()
    const { mutate: updateMutate, isSuccess: updateSuccess, isLoading: updateLoading } = useFoodDataUpdate()

    // Modo de edição
    useEffect(() => {
        if (isEditMode && editingItem) {
            setTitle(editingItem.title)
            setPrice(editingItem.price)
            setImage(editingItem.image)
        } else {
            setTitle("")
            setPrice(0)
            setImage("")
        }
    }, [isEditMode, editingItem])

    const submit = () => {
        const foodData = {
            title,
            price: Number(price),
            image
        }

        if (isEditMode && editingItem) {
            updateMutate({ id: editingItem.id, data: foodData })
        } else {
            createMutate(foodData)
        }
    }

    useEffect(() => {
        if (createSuccess || updateSuccess) {
            setModalOpen(false)
        }
    }, [createSuccess, updateSuccess, setModalOpen])

    return (
        <div className="modal-overlay">
            <div className="modal-body">
                <h2>{isEditMode ? 'Editar item do cardápio' : 'Cadastre um novo item no cardápio'}</h2>
                <form className="input-container">
                    <Input label="Título" value={title} updateValue={setTitle} />
                    <Input label="Preço" value={price} updateValue={setPrice} />
                    <Input label="Imagem" value={image} updateValue={setImage} />
                </form>
                <div className="btn-container">
                    <button onClick={submit} className="btn-secondary">
                        {(createLoading || updateLoading) ? (isEditMode ? 'Salvando...' : 'Postando...') : (isEditMode ? 'Salvar' : 'Postar')}
                    </button>
                    <button onClick={() => setModalOpen(false)} className="btn-primary">Cancelar</button>
                </div>
            </div>
        </div>
    )
}