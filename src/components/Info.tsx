import React from 'react'
import '../styles/Info.css'
const Info:React.FC= () => {
  return (
    <section className="info">
        <h2>No conozco codigos QR ¿Que debo hacer?</h2>
        <div className="info__card">
            <img src="../../public/images/QR-img.png" alt="cell phone with QR code"/>
            <p>
                El código QR es una versión bidimensional del código de barras, compuesto de patrones de píxeles en blanco y negro. Denso Wave pertenece a Denso, una proveedora de Toyota, y ha desarrollado los códigos QR para la identificación de componentes con el fin de acelerar los procesos logísticos de su producción de automóviles. Ahora, con el uso generalizado de los smartphones, el código QR ha encontrado su camino al mercado. "QR" significa "Respuesta Rápida", que se refiere al acceso instantáneo a la información oculta en el codigo.         
            </p>
        </div>
        
    </section>
  )
}

export default Info
