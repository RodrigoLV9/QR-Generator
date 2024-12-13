import React from 'react'

interface Props {
    image:string
}
const CardImage: React.FC <Props>= ({image}) => {
  return (
    <div className="cardImage">
        <img src={image} alt="example" />
    </div>
  )
}

export default CardImage
