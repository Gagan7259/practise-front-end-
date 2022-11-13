import React from 'react'
import { useState } from 'react'

const Form = () => {
    const[data,setdata]=useState({
        email:"",
        password:""
    });
    const onchange=(event)=>{
        setdata({[event.target.value]:event.target.value})
    }
    const subHandler=(e)=>{
        e.preventDefault();
        console.log(data);
    }
  return (
    <div>
      <center>
      <form onSubmit={subHandler}>
        <div>
            <label>EMAIL</label>
            <input onChange={onchange} name='email' type="text" placeholder='email id' />
        </div>
        <div>
            <label>password</label>
            <input onChange={onchange} name='password' type="password" placeholder='password' />
        </div>
        <div>
            <input type="button" value="login" />
        </div>
      </form>
      </center>
    </div>
  )
}

export default Form
