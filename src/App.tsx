import './App.css'
import Header from './components/Header/Header'
import QRGenerator from './components/GeneratorQR/QRGenerator'
function App() {

  return (
    <div className='app'>
      <Header/> 
      <QRGenerator/>
    </div>
  )
}

export default App
