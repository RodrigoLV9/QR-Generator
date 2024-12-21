import React from 'react'
import '../../styles/Steps.css'
import Card from './Card'
import CardImage from './CardImage'
import Pillar from './Pillar'
import { useLanguage } from '../../LanguageContext'

const translations={
    en:{
        title:'How can i create a free QR code?',
        description:'Discover how in just three steps'
    },
    es:{
        title:'¿Cómo puedo crear un código QR gratuito?',
        description:'Descubre cómo en sólo tres pasos'
    }
};
const translationsSteps={
    en:[
        {
            'title':'Enter the details',
            'description':'Fill in the fields with all the necessary information. Enter a link, text, contact information or any other information. Then select "Create QR code".',
            'url':'../../../public/images/image-example.jpg'
        },
        {
            'title':'Generate the QR code',
            'description':'Once you have already entered the URL you can generate your unique and permanent QR code.',
            'url':'../../../public/images/image-example.jpg'
        },
        {
            'title':'Download the QR code',
            'description':'Download your QR code in PNG format to save it on your device and use it as you like. The QR code is fully functional and permanent.',
            'url':'../../../public/images/image-example.jpg'   
        }
    ],
    es:[
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
};
const Steps:React.FC = () => {
    const {language}=useLanguage()
    const {title,description}=translations[language]
    const steps=translationsSteps[language]
  return (
    <section className="steps">
        <div className="steps__title">
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
        {
            steps.map((item, index)=>(
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
