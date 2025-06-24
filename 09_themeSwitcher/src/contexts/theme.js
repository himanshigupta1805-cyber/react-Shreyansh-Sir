import { createContext, useContext } from "react";

export const ThemeContext = createContext({
    themeMode : "light",
    lightTheme : ()=>{},
    darkTheme : ()=>{},
})

// Here we are defining ki jo context bane unke andr ye values pehle se feed ho.

export const ThemeProvider = ThemeContext.Provider

// Often people export custom hooks here

export default function useTheme(){
    return useContext(ThemeContext)
}

// Fayda - useTheme import krne pr context apne aap import ho he jaega toh do-do import nahi daalne pdenge