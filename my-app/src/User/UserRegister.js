import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';

export default function UserRegister() {

  const[user,setUser]=useState();

  const inputHandler=(e)=>{
    return setUser({...user,[e.target.name]:e.target.value});
  }

  const dataSubmit=(e)=>{
    e.preventDefault();
    axios.post("http://localhost:1234/UserRegister",user)
    .then(res=>{
      alert(res.data.msg);
    }).catch(err=>{alert(err.response.data.error)});
  }

  return (
    <div className='container mt-5'>
            <form onSubmit={dataSubmit}>
            <div className='row justify-content-center'>
                <div className='col-md-4 border p-4'>
          <h4>Patient Register</h4>
          <div className='form-group mt-2'>
            <input type='text' placeholder='Patient Name' className='form-control' name='pname' value={user?.pname}
            onChange={inputHandler}/>
          </div>
          <div className='form-group mt-2'>
            <input type='text' placeholder='Email' className='form-control' name='email' value={user?.email}
            onChange={inputHandler}/>
          </div>
          <div className='form-group mt-2'>
            <input type='text' placeholder='Address' className='form-control' name='address' value={user?.address}
            onChange={inputHandler}/>
          </div>
          <div className='form-group mt-2'>
            <input type='text' placeholder='Mobile' className='form-control' name='mobile' value={user?.mobile}
            onChange={inputHandler}/>
          </div>
          <div className='form-group mt-2'>
            <input type='password' placeholder='Password' className='form-control' name='password' value={user?.password}
            onChange={inputHandler}/>
          </div>
          <div className='form-group mt-2'>
            <button className='btn btn-primary'>Login</button>
          </div>
    
          <Link to="/userlogin">Already Register</Link>
          </div>
        </div>
        </form>
        </div>
  )
}
