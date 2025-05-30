import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { dummyProducts } from "../assets/assets";
// start with the export line, then allow it to automatically import createContext
export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    // this is the function we use when we want a link to go somewhere instead of an href
    const navigate = useNavigate();
    // state variables
    const [user, setUser] = useState(false);
    const [isSeller, setIsSeller] = useState(false);
    const [showUserLogin, setShowUserLogin] = useState(false);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        setProducts(dummyProducts);
    }

    useEffect(() => {
        fetchProducts()
    },[])

    // this is where we'll put all the state variables we want to make available elsewhere (Not declaring them here. That happens above/outisde this function)
    const value = {navigate, user, setUser, isSeller, setIsSeller, showUserLogin, setShowUserLogin}

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}

// allows us to use the function useAppContext to access any data in the value object
export const useAppContext = () => {
    return useContext(AppContext)
}