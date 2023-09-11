import { createContext, useEffect, useState } from 'react'

export const GlobalContext = createContext()

export const GlobalContextProvider = ({ children }) => {
    const [showMF, setShowMF] = useState(false)

    const handleKeydown = ({ key, ctrlKey }) => {
        if (key === "\\" && ctrlKey) {
            setShowMF(!showMF)
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeydown)

        return () => window.removeEventListener('keydown', handleKeydown)
    })

    return (
        <GlobalContext.Provider
            value={{
                showMF, setShowMF
            }}
        >
            {children}
        </GlobalContext.Provider>
    )
}
