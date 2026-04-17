'use client'
import React, { Children, createContext, useState } from 'react';


export const CountContext = createContext()
const CountProvider = ({children}) => {
    const [count, setCount] = useState([])
    return (
        <div>
            <CountContext value={{count, setCount}}>
                {children}
            </CountContext>
        </div>
    );
};

export default CountProvider;