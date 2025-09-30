import { useState } from 'react'
import './App.css'
import Card from './components/card/card.jsx'
import { CreateModal } from './components/create-modal/create-modal.jsx'
import { useFoodData } from './hooks/foodData.jsx'

function App() {
  const { data, mutate } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isEditMode, setIsEditMode] = useState(false)
  const [editingItem, setEditingItem] = useState(null)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
    setIsEditMode(false)
    setEditingItem(null)
  }

  const handleEdit = (id) => {
    const itemToEdit = data.find(item => item.id === id)
    setEditingItem(itemToEdit)
    setIsEditMode(true)
    setIsModalOpen(true)
  }

  const handleDelete = async (id) => {
    if (confirm('Tem certeza que deseja remover este item?')) {
      try {
        await fetch(`/api/food/${id}`, {
          method: 'DELETE',
        })
        mutate()
      } catch (error) {
        console.error('Erro ao deletar:', error)
      }
    }
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData) => <Card
          key={foodData.id}
          id={foodData.id}
          title={foodData.title}
          price={foodData.price}
          image={foodData.image}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />)}
      </div>
      {isModalOpen && (
        <CreateModal
          isOpen={isModalOpen}
          setModalOpen={setIsModalOpen}
          isEditMode={isEditMode}
          editingItem={editingItem}
        />
      )}
      <button className='btn-add' onClick={handleOpenModal}>+</button>
    </div>
  )
}

export default App