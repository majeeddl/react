import { createContext } from 'react'

export const theme = {
    light: {
        forground: 'black',
        background: 'white'
    },
    dark: {
        forground: 'white',
        background: 'black'
    }
}
export const ThemeContext = createContext({
    theme: theme.dark,
    setTheme: (_theme) => {
        
    }
})
