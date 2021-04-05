import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from './pages/Home/index';
import Portfolio from './pages/Portfolio';

import { DarkModeProvider } from './Context/DarkModeContext'

export default function app() {
    return (
        <DarkModeProvider>
            <Router>
                <Switch>
                    <Route path='/portfolio'>
                        <Portfolio />
                    </Route>
                    <Route path='/'>
                        <Home />
                    </Route>
                </Switch>
            </Router>
        </DarkModeProvider>
    )
}
