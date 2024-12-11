import React from 'react'
import Brand from './Brand'
import Controls from './Controls'
import '../../styles/Header.css'
const Header: React.FC = () => {
  return (
    <header>
        <Brand/>
        <Controls/>
    </header>
  )
}

export default Header