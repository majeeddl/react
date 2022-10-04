import React, { useContext } from 'react'
import { ThemeContext } from './theme.provider'


const ThemeButton = () => {

    const { theme, setTheme } = useContext(ThemeContext)

    const setButtonTheme = () => {
        setTheme("dark")
    }
    return (
        <div>
            <button style={{ backgroundColor: theme.bgColor, color: theme.fontColor }} onClick={setButtonTheme}> Theme Button </button>
        </div>
    )
}

export default ThemeButton