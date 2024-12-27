import React from 'react'
import { useLanguage } from '../../LanguageContext'
const translations={
  en:{
    sizeText:'Size',
    colorLight:'Color light',
    colorDark:'Color dark',
    placeholder:'Write URL...'
  },
  es:{
    sizeText:'Tamaño',
    colorLight:'Color claro',
    colorDark:'Color oscuro',
    placeholder:'Escribe la URL...'
  }
}
interface ConfigProps {
  setUrl:(value:string)=>void,
  size:number,
  setSize:(value:number)=>void,
  setColor1:(value:string)=>void,
  setColor2:(value:string)=>void
}
const Config:React.FC <ConfigProps> = ({setUrl, size, setSize, setColor1, setColor2}) => {
  const {language}=useLanguage()
  const {sizeText,colorLight,colorDark,placeholder}=translations[language]
  return (
    <section className='config'>
      <div className="container-input">
        <label htmlFor='url-text'>URL: </label>
        <input type="text" placeholder={placeholder} defaultValue={'https://github.com/RodrigoLV9'} onChange={(e)=>setUrl(e.target.value)} id='url-text'/>
      </div>
      <div className="options">
        <div className="container-input">
          <label htmlFor='size'>{sizeText}: {size}px</label>
          <input type="range" id="size" min={50} max={300} defaultValue={100} onChange={(e)=>setSize(parseInt(e.target.value))}/>
        </div>
        <div className="container-input">
          <label htmlFor="color-light">{colorLight}:</label>
          <input type="color" id="color-light" defaultValue={'#ffffff'} onChange={(e)=>setColor1(e.target.value)}/>
        </div>
        <div className="container-input">
          <label htmlFor="color-dark">{colorDark}:</label>
          <input type="color" id="color dark" defaultValue={'#000000'} onChange={(e)=>setColor2(e.target.value)}/>
        </div>
      </div>
    </section>
  )
}

export default Config
