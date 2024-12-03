import './App.css';
import './components/Hero.css'
import Form from './components/form';
import Navbar from './components/navbar';
import Body from './components/body';
import { useEffect, useState } from 'react';
import axios from 'axios';
import MainPage from './components/main';




function App() {
  const [ name, setName ] = useState('');
  
  const handle = (arg) => {
    setName(arg);
  }

  const [ msg, setMsg] = useState(''); 

  const addElement = async(e) =>{
    if(e){
      const b = document.getElementById('bodyclass');
      const sname = name;
      // setMsg(sname);
      b.replaceChildren("");//this is to remove all children in the div
      

      const response = await axios.post("http://localhost:3001/filter",{e});
      

      if(response){

        const datab = response.data;

        datab.map((datain) => {
          const divE = document.createElement('div');
          divE.classList.add("card");
          
          const html = `
          <div class="imgdiv">
            <img src=${datain.image} class='innerimg' alt='image' />
          </div>

          <div class="innerItemName">
            <p class='inpara' title='Microflash Air Buds Pro E35 50Hrs Battery Life, High Balkj  sdkjflkf lksdlkjflksdflkkjjkdjff'>${datain.name}</p>
          </div>
          <p class='ratingclass'>
            ${datain.id} <i class="fa-regular fa-star"></i>
          </p>`;
          divE.innerHTML = html;
          b.appendChild(divE);
        }) 
    }
      
      
    }else{
      const b = document.getElementById('bodyclass');
      b.replaceChildren("");//this is to remove all children in the div

      const response = await axios("http://localhost:3001/add",{
        method: "POST"
      })
    
      // console.log(response.data[0].id);
      // setName(response.data[0].name);
      // console.log(name);
      // console.log(response.data[0].image);
      if(response){
        // setName(response.data[0].name);

        const datab = response.data;

        datab.map((datain) => {
          const divE = document.createElement('div');
          divE.classList.add("card");
          
          const html = `
          <div class="imgdiv">
            <img src=${datain.image} class='innerimg' alt='image' />
          </div>

          <div class="innerItemName">
            <p class='inpara' title='Microflash Air Buds Pro E35 50Hrs Battery Life, High Balkj  sdkjflkf lksdlkjflksdflkkjjkdjff'>${datain.name}</p>
          </div>
          <p class='ratingclass'>
            ${datain.rating} <i class="fa-regular fa-star"></i>
          </p>`;
          divE.innerHTML = html;
          b.appendChild(divE);
        }) 
    }
  }
  }
  

  return (
    <div className="App">
      <Navbar name={name} handle={handle} addElement={addElement}/>
      {/* <Form/> */}
       <Body name={name} handle={handle} addElement={addElement}/> 
      {/* <MainPage/> */}
    </div>
  );
}

export default App;
