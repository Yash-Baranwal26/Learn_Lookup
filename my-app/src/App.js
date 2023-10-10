import React from 'react'
import { Link, Navigate,useNavigate } from 'react-router-dom'

export default function App() {
  return (
    <div>
      <br/>
        <div className='container-fluid text-decoration-underline text-center mt-2'>
      <h2>Login Page</h2>
      </div>
      <br/>

      <div className='container'>
      <div className='row'>
        <div className='col-md-6 '>
          <div className='card shadow'>
            <div className='card-body text-center'>
              <h4 className='card-title'>Patient Login</h4><hr/>
              <buttion ><Link to='/userlogin' className='btn btn-success'>LogIn</Link></buttion>
            </div>
          </div>
        </div>
        <div className='col-md-6 '>
          <div className='card shadow'>
            <div className='card-body text-center'>
              <h4 className='card-title'>Docter Login</h4><hr/>
              <buttion><Link to='/dLogin' className='btn btn-success'>LogIn</Link></buttion>
            </div>
          </div>
        </div>
        </div>
      </div>
      {/* <div className='row container-fluid bg-danger text-center'>
        <div className='col-md-6 border'>
            <h4>LogIn for Patient</h4>
            <buttion ><Link to='/userlogin' className='btn btn-primary'>LogIn</Link></buttion>
        </div>
        <div className='col-md-6 border'>
            <h4>Login for Docter</h4>
            <buttion><Link to='/dLogin' className='btn btn-primary'>LogIn</Link></buttion>
        </div>
      </div> */}
    </div>
  )
}
