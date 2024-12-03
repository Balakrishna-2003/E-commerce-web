import React,{ useState } from 'react';
import axios from 'axios';


export default function Form() {

    const [data, setData ] = useState({
        id: '',
        name: '',
    });
    // const [data, setData] = useState("balakrishna");

    const formHandle = async(e) => {
     
        
        const response = await axios.post("http://localhost:3001/", data);  
        console.log(response);
              
        
    }

  return (
    <div>
      <form action="" onSubmit={(e) => { e.preventDefault(); formHandle(e)}}>
        <label htmlFor='idinput'>Enter your id: </label><br/>
        <input htmlFor='idinput' type='number' onChange={(e) => setData({id: e.target.value,name:data.name})}required/><br/>
        <label htmlFor='nameinput'>Enter your name: </label><br/>
        <input htmlFor='nameinput' type='text' onChange={(e) => setData({id: data.id,name: e.target.value})} required/><br/>
        <button type='submit'>Submit</button>
      </form>

      <h2>ID {data.id} name {data.name}</h2>
    </div>
  )
}
