import { createContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from 'react';

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {

    const { user, isAuthenticated, isLoading} = useAuth0()
    const [ edit, setEdit] = useState(false);
    const [profile, setProfile] = useState(null);
    const [ hasLoaded, setHasLoaded] = useState(false);
    const [entry, setEntry] = useState(null);
    const [sortedEntry, setSortedEntry] =useState([]);
    const [sort, setSort] = useState(false);


    return (
        <UserContext.Provider
        value={{user, 
                isAuthenticated, 
                isLoading, 
                edit, 
                setEdit, 
                profile, 
                setProfile, 
                hasLoaded, 
                setHasLoaded, 
                entry, 
                setEntry, 
                sortedEntry, 
                setSortedEntry, 
                sort, 
                setSort}}>
            {children}
        </UserContext.Provider>
    )
};

