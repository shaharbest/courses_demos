import { createContext, useContext } from "react";

const Pita = createContext();

function useTheme() {
    return useContext(Pita);
}

function ThemeProvider({ children }) {
    return <Pita.Provider value={{ isDark: true }}>
        {children}
    </Pita.Provider>;
}

export {
    Pita,
    ThemeProvider,
    useTheme
}