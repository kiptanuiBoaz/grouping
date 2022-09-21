import React from "react";
import {data} from "./data";


export const  App = () => {

  const arrIndex = [];
  // const noMembers= 0;
  // const groupSize = data.length/noMembers;
  
  const arrIndexGenetator = ()=>{
    for(var i =0; i < data.length; i++) {
      arrIndex.push(i);
    }
  //  
  }

  const Randomize = () => {
    arrIndexGenetator();

    data.map((datum, index, data)=>{

      for(var a =0; a < data.length; a++) {
        if(arrIndex.indexOf(datum.id) !== -1) {
      
          datum.id = Math.floor(Math.random() * data.length);
          arrIndex.pop(datum.id);
        }
      }
      return data;

    })
  };

  console.log(data);

  return (
    <div >
    
        <h1>Please input your required number per group:</h1>

        <label  >Number per group</label>

        <input type="number" name="numberPerGroup"  required/>


        <button onClick={Randomize }>Randomize</button>
        
        <div>

        </div>
    </div>
    
  );
}


