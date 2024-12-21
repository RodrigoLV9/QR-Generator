/* import React from 'react'
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
        <select name="idiom" id="" className='idiom'>
            <option value="español">Español</option>
            <option value="english">English</option>
        </select>
        <button className="mode" onClick={handleMode}>
            {mode ? <FaMoon/> : <MdSunny/>}
        </button>
    </section>
  )
}

export default Controls */

import React from 'react';
import { useState } from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useLanguage } from '../../LanguageContext';

const Controls: React.FC = () => {
  const [mode, setMode] = useState<boolean>(true);
  const { language, setLanguage } = useLanguage();

  const handleMode = (): void => {
    setMode(!mode);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en');
  };

  return (
    <section className='controls'>
      <select name="idiom" id="" className='idiom' value={language} onChange={handleLanguageChange}>
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
      <button className="mode" onClick={handleMode}>
        {mode ? <FaMoon /> : <MdSunny />}
      </button>
    </section>
  );
};

export default Controls;