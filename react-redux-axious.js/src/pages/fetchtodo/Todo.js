import React, { useEffect, useState } from 'react'

const Todo = () => {
 const[todos,settodos] = useState([]);
     useEffect (() =>{
        fetchto(); 
     },[]);
    const fetchto = async() =>{
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(json => settodos(json))

        const rest = await fetch('https://jsonplaceholder.typicode.com/todos')

        const json = await rest.json();
       console.log("rest",json);
       settodos(json)
    };
   
  return (
    <div>todo
   {todos?.map((item, index) => 
   <p key={index}>{item?.title}</p>)}
    </div>
  )
}

export default Todo