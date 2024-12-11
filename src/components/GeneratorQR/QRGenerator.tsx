import React from 'react'
import Config from './Config'
import ContainerQR from './ContainerQR'
import '../../styles/QRGenerator.css'
const QRGenerator:React.FC=()=>{

    return(
        <section className='qrGenerator'>
            <Config/>
            <ContainerQR/>
        </section>
    )
}

export default QRGenerator