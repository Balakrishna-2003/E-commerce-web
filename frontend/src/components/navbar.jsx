import React ,{ useState  } from "react";
import axios from 'axios';
import "../App.css";

export default function Navbar(props) {
  const user = {
    name: "balakrishna",
    data: "this is sample data",
  };



  const searchKey = (e) => {
    if(e.key === "Enter"){
      const searchi = document.getElementById("searchid");
      if(searchi.value){
        alert(`you have successfully clicked the enter key with input ${searchi.value}`);
        // handle(searchi.value);
        props.handle(searchi.value);
      }else{
        props.addElement(undefined);
      }
    }
  }

  const handleClick = async (e) => {
    console.log(e);

    try {
      const response = await axios("http://localhost:3001/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      console.log(response);
      alert(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="navback">
      <nav id="navid">
        <div id="logo">
          <div
            id="navimg"
          ></div>
          <h2>UrbanCart</h2>
        </div>
        <div>
          <input type="search" id="searchid" onKeyDown={(e) => {searchKey(e)}}/><i class="fa-solid fa-magnifying-glass border" ></i>
        </div>

        <div className="allLinks">
        <a href="#" className="loginid" onClick={(e) => handleClick(e)}><i class="fa-regular fa-circle-user"></i> Login</a>
        <a href="#" className="loginid" onClick={() =>alert("This feature will soon be available")}><i class="fa-solid fa-cart-shopping"></i> cart</a>
        </div>
      </nav>
    </div>
  );
}
