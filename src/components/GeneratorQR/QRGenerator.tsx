import React, {useState} from 'react'
import Config from './Config'
import ContainerQR from './ContainerQR'
import '../../styles/QRGenerator.css'
const QRGenerator:React.FC=()=>{
    const [size, setSize]=useState<number>(100)
    const [url, setUrl]=useState<string>('https://github.com/RodrigoLV9')
    const [color1, setColor1]=useState<string>('#ffffff')
    const [color2, setColor2]=useState<string>('#000000')
    
    return(
        <main className='qrGenerator'>
            <Config
                setUrl={setUrl} size={size} setSize={setSize}
                setColor1={setColor1} setColor2={setColor2}
            />
            <ContainerQR
                url={url} size={size} color1={color1}  color2={color2}
            />
        </main>
    )
}

export default QRGenerator