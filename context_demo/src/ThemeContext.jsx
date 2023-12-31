import { createContext, useContext } from "react";

const Pita = createContext();

export function useTheme() {
    return useContext(Pita);
}

export function ThemeProvider({ children, value }) {
    return <Pita.Provider value={value}>
        {children}
    </Pita.Provider>;
}