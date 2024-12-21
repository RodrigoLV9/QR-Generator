import React from 'react'
import '../styles/Info.css'
import { useLanguage } from '../LanguageContext';
const translations = {
  es: {
    title: 'No conozco codigos QR ¿Que debo hacer?',
    description: 'El código QR es una versión bidimensional del código de barras, compuesto de patrones de píxeles en blanco y negro. Denso Wave pertenece a Denso, una proveedora de Toyota, y ha desarrollado los códigos QR para la identificación de componentes con el fin de acelerar los procesos logísticos de su producción de automóviles. Ahora, con el uso generalizado de los smartphones, el código QR ha encontrado su camino al mercado. "QR" significa "Respuesta Rápida", que se refiere al acceso instantáneo a la información oculta en el codigo. ',
  },
  en: {
    title: 'I don\'t know QR codes, what should I do?',
    description: 'The QR code is a two-dimensional version of the barcode, made up of black and white pixel patterns. Denso Wave belongs to Denso, a Toyota supplier, and has developed QR codes for component identification to accelerate the logistics processes of its automobile production. Now, with the widespread use of smartphones, the QR code has found its way to the market. "QR" stands for "Quick Response", which refers to instant access to the information hidden in the code.',
  },
};
const Info:React.FC= () => {
  const {language} =useLanguage()
  const {title, description} = translations[language]
  return (
    <section className="info">
        <h2>{title}</h2>
        <div className="info__card">
            <img src="../../public/images/QR-img.png" alt="cell phone with QR code"/>
            <p>{description}</p>
        </div>
        
    </section>
  )
}

export default Info
