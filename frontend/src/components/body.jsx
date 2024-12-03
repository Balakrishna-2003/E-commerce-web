import React, { createContext, useContext, useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';
import img from '../assets/Firefox_wallpaper.png';





export default function Body({name,handle,addElement}) {
  
  // const [name,setName] = useState('sf');
  const [ response, setresponse ] = useState("");
  

  const [ e, setE ] = useState('');
  useEffect(() =>{
    addElement(e);
  },[]);

  if(name){
    addElement(name);
  }

  
  return (
    <div>
      <div id="bodyclass">

        <div className='card'>
          <div className="imgdiv">
            <img src={img} className='innerimg' alt='image for this' />
          </div>

          <div className="innerItemName">
            <p className='inpara' title='Microflash Air Buds Pro E35 50Hrs Battery Life, High Balkj  sdkjflkf lksdlkjflksdflkkjjkdjff'>Microflash Air Buds Pro E35 50Hrs Battery Life, High Balkjs dkjflkflksdlkjflksdflkkjj kd hhhjhjhjff</p>
          </div>
          <p className='ratingclass'>
            3.9 <i class="fa-regular fa-star"></i>
          </p>
        </div>
        
      </div>
    </div>
  )
}
