import './App.css'
import Card from './components/card/card.jsx'
import { useFoodData } from './hooks/foodData.jsx'

function App() {
  const { data } = useFoodData()

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
    </div>
  )
}

export default App
