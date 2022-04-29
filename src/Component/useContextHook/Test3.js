import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const UseContextHook = () => {

    const [user, setUser] = useContext(UserContext);
    const updateData = () => {

        setUser( prevState=>{
            return{
                ...prevState,
                name: "ajay",
                salary: 23400,
                age:25
            }
        }
            
               

            
        )

    }
    console.log(user);
    return (
        <>
            <h3 > {user.id} || {user.name} || {user.age} || {user.dept} || {user.salary} || </h3>
            <button onClick={updateData} >update user data of useContext </button>


            <h1>this is the explanation of useContext Hook</h1>
        </>
    )
}

export default UseContextHook

//useContext:
//this hook is used to use the context api.
//props drilling : if you have four components , and you need to pass the data from one
// to second then to third then to fourth compo. but this data will be used only in first and fourth comp. so over here second and third comp. is having or receiving props data which they are even not using .