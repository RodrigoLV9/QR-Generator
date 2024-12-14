import React from 'react'

interface ConfigProps {
  setUrl:(value:string)=>void,
  size:number,
  setSize:(value:number)=>void,
  setColor1:(value:string)=>void,
  setColor2:(value:string)=>void
}
const Config:React.FC <ConfigProps> = ({setUrl, size, setSize, setColor1, setColor2}) => {
  
  return (
    <section className='config'>
      <div className="container-input">
        <label htmlFor="">URL: </label>
        <input type="text" placeholder='Write URL...' defaultValue={'https://github.com/RodrigoLV9'} onChange={(e)=>setUrl(e.target.value)}/>
      </div>
      <div className="options">
        <div className="container-input">
          <label htmlFor="">Size: {size}px</label>
          <input type="range" name="" id="" min={50} max={250} onChange={(e)=>setSize(parseInt(e.target.value))}/>
        </div>
        <div className="container-input">
          <label htmlFor="">Color light:</label>
          <input type="color" name="" id="" defaultValue={'#ffffff'} onChange={(e)=>setColor1(e.target.value)}/>
        </div>
        <div className="container-input">
          <label htmlFor="">Color dark:</label>
          <input type="color" name="" id="" defaultValue={'#000000'} onChange={(e)=>setColor2(e.target.value)}/>
        </div>
      </div>
    </section>
  )
}

export default Config
