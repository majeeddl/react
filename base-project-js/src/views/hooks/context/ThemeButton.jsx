import React, { useContext } from 'react'
import { ThemeContext } from './theme.context'

const ThemeButton = () => {

    const { theme } = useContext(ThemeContext)

    const setButtonTheme = ()=> {}
    return (
        <div>

            <button style={{ backgroundColor: theme.background, color: theme.forground }} onClick={setButtonTheme}> Theme Button </button></div>
    )
}

export default ThemeButton