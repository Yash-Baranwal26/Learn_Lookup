import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Navigate,useNavigate } from 'react-router-dom';

export default function DocterLogin() {

    const[user,setUser]=useState();
    const Navigate=useNavigate();

    const inputHandler=(e)=>{
        return setUser({...user,[e.target.name]:e.target.value})
    }

    const loginDocter=(e)=>{
      e.preventDefault();
      axios.post("http://localhost:1234/docterLogin",user)
      .then(res=>{
        var result = res.data;
          Navigate('/dWelcome')
          localStorage.setItem("did",JSON.stringify(result));
      }).catch(err=>{alert(err.response.data.error)});
  }

  return (
    <div className='container mt-5'>
     
        <form onSubmit={loginDocter}>
        <div className='row justify-content-center'>
            <div className='col-md-4 border p-4'>
      <h4>Docter Login</h4>
      <div className='form-group'>
        <input type='text' placeholder='Docter Name' className='form-control' 
        name='dname' value={user?.dname} onChange={inputHandler}/>
      </div>
      <div className='form-group mt-2'>
        <input type='text' placeholder='Password' className='form-control' 
        name='password' value={user?.password} onChange={inputHandler}/>
      </div>
      <div className='form-group mt-2'>
      <button className='btn btn-primary'>Login</button>
      </div>

      <Link to="/dRegister">New Docter?</Link>
      </div>
    </div>
    </form>
    </div>
  )
}
