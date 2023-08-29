"use client"
import React from "react";

// create a context with default values
const GlobalContext = React.createContext({
    value: 'default',
    setValue: (value: string) => {},
});

// create a provider for the context
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [value, setValue] = React.useState('default');

    return (
        <GlobalContext.Provider value={{ value, setValue }}>{children}</GlobalContext.Provider>
    );
}

export const useGlobalContext = () => React.useContext(GlobalContext);