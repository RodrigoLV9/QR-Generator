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
            'title':'Enter a URL or text',
            'description':'Enter a link, text, contact information or any other information and the QR code will immediately be generated.',
            'url':'../../../public/images/image-example.jpg'
        },
        {
            'title':'Customize your QR code',
            'description':'Modify other variables such as size and colors to your liking and in real time your QR code will be modified. These variables have an assigned value by default.',
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
            'title':'Introduce una URL o texto',
            'description':'Introduce un enlace, un texto, información de contacto o cualquier otra información e inmediatamente se generara el codigo QR.',
            'url':'../../../public/images/step-image1.jpg'
        },
        {
            'title':'Personaliza tu codigo QR',
            'description':'Modifica otras variables como el tamaño y colores a tu gusto y en tiempo real tu codigo QR se modificara, estos variables tienen por defecto un valor asignado.',
            'url':'../../../public/images/step-image2.jpg'
        },
        {
            'title':'Descarga el codigo QR',
            'description':'Descarga tu codigo QR en formato PNG para guardarlo en tu dispositivo y poder usarlo a gusto. El codigo QR es completamente funcional y permanente.',
            'url':'../../../public/images/step-image3.jpg'   
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
