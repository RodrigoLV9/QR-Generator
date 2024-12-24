import React, {createContext, useContext, useState, ReactNode} from 'react'

interface ModeContextValue{
    mode:boolean,
    setMode:(mode:boolean)=>void
}
const ContextMode = createContext<ModeContextValue | undefined>(undefined);

export const ModeContext:React.FC<{children:ReactNode}>=({children})=>{
    const [mode, setMode]=useState<boolean>(true)
    return(
        <ContextMode.Provider value={{mode,setMode}}>
            {children}
        </ContextMode.Provider>
    )
}
export const useMode=()=>{
    const context=useContext(ContextMode)
    if(!context){
        throw new Error('Error in the context')
    }
    return context
}