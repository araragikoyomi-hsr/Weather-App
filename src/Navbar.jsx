import  { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { ThemeContext } from './components/Provider/Theme'


export function Navbar() {
    const {theme, toggleTheme} = useContext(ThemeContext)

    return(
        <div>
           

            <nav>
            <h1>Weather Data Fetcher</h1>
                {/* <Link to="/">Home Page</Link> */}
                <button onClick={() => toggleTheme()}>Switch to {theme === "light"? "Dark" : "Light"} mode</button>
            </nav>
        </div>
    )
}