import React from 'react'
import PhilLogo from './components/PhilLogo';
import Home from './pages/Home/index'
import { DarkModeProvider } from './Context/DarkModeContext'

export default function app() {
    return (
        <DarkModeProvider>
            <Home />
        </DarkModeProvider>
    )
}
