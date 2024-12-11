import React from 'react'

const ContainerQR:React.FC = () => {
  return (
    <section>
      <div className="qr"></div>
      <div className="buttons">
        <button>Generator QR</button>
        <button>Download PNG</button>
      </div>
    </section>
  )
}
export default ContainerQR