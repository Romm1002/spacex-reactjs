import React, { useEffect, useState } from 'react'
import { Moon, BrightnessLow } from 'react-bootstrap-icons'

const ThemeMode = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem('theme') === 'dark')

    useEffect(() => {
        // Set / unset dark-mode
        document.body.classList.toggle('dark-mode')
        // Change button style
        document.querySelector('#darkModeBtn').classList.toggle('btn-light')
        document.querySelector('#darkModeBtn').classList.toggle('btn-dark')

        localStorage.setItem('theme', isDarkMode === true ? 'dark' : 'light')
    }, [isDarkMode])

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode)
    }

    return (
        <button
            onClick={toggleDarkMode}
            id={'darkModeBtn'}
            className='btn btn-light py-0'
            style={{ width: '60px', height: '40px' }}
        >
            {isDarkMode ? <BrightnessLow /> : <Moon className={'mb-1'} />}
        </button>
    )
}

export default ThemeMode
