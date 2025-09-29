import './App.css'
import './components/card/card.jsx'

function App() {
  const data = []

  return (
    <div className="container">
      <h1>Cardápio</h1>
      <div className="card-grid">
        {data.map((foodData, index) => <Card
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
