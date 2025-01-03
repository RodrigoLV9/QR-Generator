import './App.css'
import Header from './components/Header/Header'
import QRGenerator from './components/GeneratorQR/QRGenerator'
import Info from './components/Info'
import Footer from './components/Footer'
import Steps from './components/Steps/Steps'

function App() {
  return (
    <div className='app'>
      <Header/> 
      <QRGenerator/>
      <Info/>
      <Steps/>
      <Footer/>
    </div>
  )
}

export default App
