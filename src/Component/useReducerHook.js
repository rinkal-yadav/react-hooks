import React from "react";

function UseReducerHook () {
    return (
        <>
            <h1> This is explaination is UseReducerHook </h1>
        </>
    )
}

export default UseReducerHook

// why ? 14 15

// useState v/s useReducer

// useState hook is easy to use when you are having primitive data types like number, string, etc. It is still fine to useState at some point for the non-primitive data types like objects when these objects are having 3-4 key value pairs // But generally we will be having big complex objects containing lotz of key-value pairs so to update the state, prevState concept

// becomes complex,17 

// and then to make it easy we use useReducer hook.
// useReducer: it takes two arguments: state, reducer function
// this reducer function will be responsible to update the state variable. 
// this reducer function takes two parameters state and action....
// usestate hook is easy to use when we have primitive datatypes like number,string,etc . it is still fine to usestate at some point for the non-primitive data types like objects when these objects are having 3-4 key value pairs 