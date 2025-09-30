import { useState } from 'react'
import './App.css'
import Card from './components/card/card.jsx'
import { CreateModal } from './components/create-modal/create-modal.jsx'
import { useFoodData } from './hooks/foodData.jsx'

function App() {
  const { data } = useFoodData()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(prev => !prev)
  }

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data?.map((foodData, index) => <Card
          key={index}
          title={foodData.title}
          price={foodData.price}
          image={foodData.image}
        />)}
      </div>
      {isModalOpen && <CreateModal isOpen={isModalOpen} setModalOpen={setIsModalOpen} />}
      <button onClick={handleOpenModal}>Novo</button>
    </div>
  )
}

export default App