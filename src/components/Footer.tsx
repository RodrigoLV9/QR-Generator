import React from 'react'
import '../styles/Footer.css'
import { useLanguage } from '../LanguageContext'
const translations={
  en:{
    text1:'Made by RodrigoLV',
    text2:'© 2024 QR Generator',
    text3:'My portfolio'
  },
  es:{
    text1:'Hecho por RodrigoLV',
    text2:'@ 2024 Generador de QR',
    text3:'Mi portafolio'
  }
}
const Footer:React.FC = () => {
  const {language}=useLanguage()
  const {text1, text2, text3}=translations[language]
  return (
    <footer className='footer'>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
    </footer>
  )
}
export default Footer