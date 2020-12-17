import React, {useState} from 'react';

export const DarkModeContext = React.createContext();

export const DarkModeProvider =({ children }) => {
    const [darkMode, setDarkMode] = useState(true);

    return <DarkModeContext.Provider
    value={{darkMode, setDarkMode}}>
        {children}
    </DarkModeContext.Provider>
}

export default DarkModeContext;