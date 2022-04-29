import React, { useEffect, useState } from "react";

function TestUseEffect (){
    const [a,setA]=useState("ABC")
    const [b,setB]=useState("YXGS")

    //didmount
    // useEffect(()=>{
    //     console.log("Hello useEffect Hook");
    // },[])

    // didMount , didUpdate
    // useEffect(()=>{
    //     console.log("Hello useEffect Hook");
    // })

   
    useEffect(()=>{
        console.log("Hello useEffect Hook");
    },[a])
    return(
        <h1>
             this is useEffect explanation
             <p>Value of a state variable = {a} </p>
             <p>Value of b state variable = {b} </p>
             <button onClick={()=>setA("QEW")}>Update a state value</button>
             <button onClick={()=>setB("HHG")}>Update b state value</button>


        </h1>
    )
}
export default TestUseEffect


// useEffect :
// alternative of the life cycle methods
// componentDidMount ,componentDidUpdate, componentWillUmount