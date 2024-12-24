import React from 'react';
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useLanguage } from '../../LanguageContext';
import { useMode } from '../../ModeContext';
const Controls: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLanguage(e.target.value as 'es' | 'en');
  };


  const {mode, setMode}=useMode()
  const handleMode = (): void => {
    setMode(!mode);
    document.querySelector('html')?.setAttribute('data-theme', mode ? 'dark' : 'light');
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