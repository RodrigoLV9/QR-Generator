import React from 'react'

interface Props {
    image:string,
    altItem:string
}
const CardImage: React.FC <Props>= ({image, altItem}) => {
  return (
    <div className="cardImage">
        <img src={image} alt={altItem} loading='lazy'/>
    </div>
  )
}

export default CardImage
