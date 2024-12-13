import React from 'react'
import '../../styles/Steps.css'
import Card from './Card'
import CardImage from './CardImage'
import Pillar from './Pillar'
const infoSteps=[
    {   
        'title':'Introduce los detalles',
        'description':'Rellena los campos con toda la información necesaria. Introduce un enlace, un texto, información de contacto o cualquier otra información. Luego seleccione "Crear código QR".',
        'url':'../../../public/images/image-example.jpg'
    },
    {   
        'title':'Genera el codigo QR',
        'description':'Una vez que ya hayas puesto la URL ya puedes generar tu codigo QR unico y permanente.',
        'url':'../../../public/images/image-example.jpg'
    },
    {   
        'title':'Descarga el codigo QR',
        'description':'Descarga tu codigo QR en formato PNG para guardarlo en tu dispositivo y poder usarlo a gusto. El codigo QR es completamente funcional y permanente.',
        'url':'../../../public/images/image-example.jpg'
    }
]
const Steps:React.FC = () => {

  return (
    <section className="steps">
        <div className="steps__title">
            <h2>¿Cómo puedo crear un código QR gratuito?</h2>
            <p>Descubre cómo en sólo tres pasos</p>
        </div>
        {
            infoSteps.map((item, index)=>(
                <div className="step">
                    <CardImage key={index} image={item.url}/>
                    <Card key={index} title={item.title} description={item.description}/>
                </div>
            ))
        }
        <Pillar/>
    </section>
  )
}

export default Steps
