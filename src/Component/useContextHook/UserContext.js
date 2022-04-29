import React,{createContext, useState} from "react";

export const UserContext= createContext();

function UserContextProvider (props){
    const [user,setUser]=useState(
        {id:1,name:"john",age:23,dept:"ECE",salary:20000}

    )
    return(
        <>
            <UserContext.Provider value={[user,setUser]}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}
export default UserContextProvider