import './App.css'
import Header from './components/Header/Header'
import QRGenerator from './components/GeneratorQR/QRGenerator'
import Info from './components/Info'
function App() {

  return (
    <div className='app'>
      <Header/> 
      <QRGenerator/>
      <Info/>
    </div>
  )
}

export default App
