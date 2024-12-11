import React from 'react'


const Brand :React.FC = ()=>{
    return(
        <section className='brand'>
            <img src="../../../public/images/qr-logo.png" alt="QR" />
            <div className="brand__text">
                <h3>QR Code Generator</h3>
                <p>Create your QR code 100% free</p>
            </div>
            
        </section>
    )
}

export default Brand