import React, { useState } from 'react'

const Hook2 = () => {
    const [InputValue,SetInputValue]=useState("");

    let Handler=(e)=>{
const newInputValue=e.target.value;
SetInputValue(newInputValue);
    }
  return (
    <div>
      {InputValue} <input onChange={Handler} type="text" placeholder='enter what u want.......'/>
    </div>
  )
}

export default Hook2
