import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export function UserProvider({children}){
    const [favorit, setFavorit] = useState([]);

    const toggleFavorit = (userId) =>{
        setFavorit((prev) =>
            prev.includes(userId) ? prev.filter((id) => id !== userId) : [...prev,userId]
        );
    };

    return(
        <UserContext.Provider value={{favorit, toggleFavorit}}>
            {children}
        </UserContext.Provider>
    );
}

export function useUserContext(){
    return useContext(UserContext);
}