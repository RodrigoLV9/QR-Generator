import React from 'react'
/* import { MdSunny } from "react-icons/md"; */
import { FaMoon } from "react-icons/fa";

const Controls :React.FC = () => {
  return (
    <section className='controls'>
        <select name="mode-theme" id="">
            <option value="español">Español</option>
            <option value="english">English</option>
        </select>
        <div className="mode">
            <FaMoon/>
        </div>
    </section>
  )
}

export default Controls
