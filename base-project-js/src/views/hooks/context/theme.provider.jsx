import React, { useState,createContext } from 'react';

export const ThemeContext = createContext();
export const WHITE = 'white'
export const DARK = 'dark'

const ThemeProvider = ({ children }) => {
    const themes = {
        white: {
            bgColor: '#ffff',
            fontColor: '#434A60'
        },
        dark: {
            bgColor: '#59B2CA',
            fontColor: '#ffff'
        },
    };

    // setting the logic to handle the theme changes
    const [theme, setTheme] = useState(WHITE);

    return (
        <ThemeContext.Provider
            value={{
                theme: themes[theme],
                setTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;