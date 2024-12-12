import React from 'react'

const Config:React.FC = () => {
  return (
    <section className='config'>
      <div className="container-input">
        <label htmlFor="">URL: </label>
        <input type="text" placeholder='Write URL...'/>
      </div>
      <div className="options">
        <div className="container-input">
          <label htmlFor="">Size:</label>
          <input type="range" name="" id="" />
        </div>
        <div className="container-input">
          <label htmlFor="">Color light:</label>
          <input type="color" name="" id="" />
        </div>
        <div className="container-input">
          <label htmlFor="">Color dark:</label>
          <input type="color" name="" id="" />
        </div>
      </div>
    </section>
  )
}

export default Config
