import { createContext, useContext } from "react";
// start with the export line, then allow it to automatically import createContext
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // this is where we'll put all the state variables we want to make available elsewhere (Not declaring them here. That happens above/outisde this function)
    const value = {}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// allows us to use the function useAppContext to access any data in the value object
export const useAppContext = () => {
    return useContext(AppContext)
}