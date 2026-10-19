import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'

function App() {
  return (
    <>
      <Navbar />

      <div className="flex gap-4 p-4">
        <Card />
        <Card />
      </div>
    </>
  )
}

export default App