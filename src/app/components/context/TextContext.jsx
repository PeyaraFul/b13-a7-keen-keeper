'use client'
import React, { createContext, useState } from 'react';



export const TextContext = createContext() ;

const TextProvider = ({children}) => {
    const [message, setMessage] = useState([]) ;
    return (
        <>
             <TextContext value={{message, setMessage}}>
                {children}
                 </TextContext>
        </>
    );
};

export default TextProvider;