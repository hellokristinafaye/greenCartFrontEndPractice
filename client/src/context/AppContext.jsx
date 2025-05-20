import { createContext } from "react";
// start with the export line, then allow it to automatically import createContext
export const AppContext = createContext();



export const AppContextProvider = ({children}) => {
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}
