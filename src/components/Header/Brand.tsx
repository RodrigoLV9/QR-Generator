import React from 'react'
import { useLanguage } from '../../LanguageContext'
const translations={
    en:{
        title:'QR Code Generator',
        description:'Create your QR code 100% free'
    },
    es:{
        title:'Generador de Codigo QR',
        description:'Crea tu codigo QR 100% gratis'
    }
}
const Brand :React.FC = ()=>{
    const {language}=useLanguage()
    const {title,description}=translations[language]
    return(
        <section className='brand'>
            <img src="../../../public/images/qr-logo.png" alt="QR" />
            <div className="brand__text">
                <h3>{title}</h3>
                <p>{description}</p>
            </div>
            
        </section>
    )
}

export default Brand