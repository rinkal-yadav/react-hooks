import React,{useState} from 'react'


function TestUseState() {
    const [name,setName]=useState("john")
    const [user,setUser]=useState({name:"rinkal",age:24});

    // Returns a state variable and a function using which you can update the state value. because we do not have setState function in functional components, also it will take the initial value of the state variable.

    // Named function - variable whose value is equal to a function
    // const updateState = function(){
    //     setName("rinkal")
    // }

    const updateState=()=>{
        setName("rinkal")
    }

    const updateUser = ()=>{
        setUser(prevState => {
            return({
            ...prevState,
            age: 26,
            })}
          );
      
        
    }

  return (
      <>
        <h1>State is : {name} </h1>
        <button onClick={updateState}>click to update State value </button> <br/>
        <button onClick={()=>setName("aditya")}>click to update State value using arrow function </button>
        <br/>

        <h1> user Name is : {user.name} <br/> user Age is : {user.age} </h1>
        <button onClick={updateUser}>click to object state variable vlaue</button>
      </>
  )
}

export default TestUseState
