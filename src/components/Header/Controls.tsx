import React from 'react'
import { useState } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const Controls :React.FC = () => {

  const [mode,setMode]=useState<boolean>(true)
  const handleMode=():void=>{
    setMode(!mode)
  }
  return (
    <section className='controls'>
        <select name="mode-theme" id="">
            <option value="español">Español</option>
            <option value="english">English</option>
        </select>
        <button className="mode" onClick={handleMode}>
            {mode ? <FaMoon/> : <MdSunny/>}
        </button>
    </section>
  )
}

export default Controls
