import Axios from "axios";
import React, { useEffect, useState } from 'react'


const Axiios = () => {
    const[todos,settodos] = useState([]);
     useEffect (() =>{
        fetchto(); 
     },[]);
    const fetchto = async() =>{
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(response => response.json())
        // .then(json => settodos(json))

    //     const rest = await fetch('https://jsonplaceholder.typicode.com/todos')

    //     const json = await rest.json();
    //    console.log("rest",json);
    //    settodos(json)

    const re = await Axios.get('https://jsonplaceholder.typicode.com/todos')
      Axios.post(url,{ser:3, title:vbvb})
      console.log("re",re?.data);
      settodos(re?.data)
    };
  return (
    <div>Axios start datas///////////////////////////////////////////////////////
         {todos?.map((item, index) => 
   <p key={index}>{item?.title}</p>)}
    </div>
  )
}

export default Axiios