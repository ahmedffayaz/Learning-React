import React, { useEffect, useState } from 'react';
import Card from '../components/utils/Card.jsx'
import ThemeBtn from '../components/utils/ThemeBtn.jsx'
import { ThemeProvider } from '../context/theme.js'
function ThemeSwitcher() {
    const [themeMode, setThemeMode] = useState("light")

    const lightTheme = () => {
        setThemeMode("light")
    }

    const darkTheme = () => {
        setThemeMode("dark")
    }

    useEffect(() => {
        const root = document.documentElement
        root.classList.toggle('dark', themeMode === 'dark')
        console.log("Theme mode changed to: ", themeMode)
    }, [themeMode])

    return (
        <>
            {/* Content Api using using theme toggler */}
            <ThemeProvider value={{ themeMode, lightTheme, darkTheme }}>
                <div className="flex flex-wrap items-center">
                    <div className="w-full">
                        <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        </div>

                        <div className="w-full max-w-sm mx-auto">
                            <Card>
                            <ThemeBtn />
                            </Card>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
}

export default ThemeSwitcher;