import React, {createContext, useState } from 'react'

export const ThemeContext = createContext()

export function ThemeProvider({children}){
    const [theme, setTheme] = useState("dark")
    const toggleTheme = () => {
        setTheme((prev)=> (prev === "light" ? "dark" : "light"))
    }
    return(
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
    )
}