import './App.css'
import NavBar from './components/NavBar'
import Galeria from './components/Galeria'

function App() {

  return (
    <div className='app-contenedor'>
      <NavBar />
      <Galeria texto={ "Productos Nuevos" }/>
    </div>
  )
}

export default App
