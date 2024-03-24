import { createContext, useState } from "react";
 
export const UserContext = createContext();
 
export const useUsersContext = ()=> {
 
    const [users, setUsers] = useState({});
    
    const addUser = (user)=> {
        setUsers(user)
    }

    return {
        ...users, addUser
    }
};
 