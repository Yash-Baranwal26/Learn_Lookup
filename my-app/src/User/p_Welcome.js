import React from 'react'
import { useState } from 'react';
import axios from 'axios';

export default function P_Welcome() {

    var data = JSON.parse(localStorage.getItem('aid'));
    console.log(data);

    const[detail,setDetail]=useState(null);
    const[attachment,setAttachment]=useState();

    const inputHandler=(e)=>{
        return setDetail({...detail,[e.target.name]:e.target.value});
    }

    function uploadFile(e){
      setAttachment(e.target.files[0])
    }
    console.log(attachment);

    const submitDetail=(e)=>{
      e.preventDefault();
      const formdata = new FormData();
      formdata.append("pname",detail.pname);
      formdata.append("category",detail.category);
      formdata.append("age",detail.age);
      formdata.append("description",detail.description);
      formdata.append("attachment",attachment);

      axios.post("http://localhost:1234/appointment",formdata)
      .then(res=>{
        alert(res.data.Success)
      }).catch(err=>{console.log(err)});
    }

  return (
    <div>
      <div className='container'>
        <div className='text-center mt-3'>
        <h2>Welcome {data.pname}</h2>
        </div>
        
        <form className='form' onSubmit={submitDetail} enctype="multipart/form-data">
          <div className='row'>
            <div className='col-md-6'>
              <h2>Register your appointment</h2>
              <div className='form-group'>
                  <input type='text' placeholder='Patient Name' className='form-control'
                  name='pname' value={(detail?.pname)} onChange={inputHandler}/>
                </div>

      <div className="form-group">
      <select className="form-control" name="category" value={detail?.category}
       onChange={inputHandler}>
          <option>Choose Category</option>
          <option value="100">Heart Specialist</option>
          <option value="101">Bone Specialist</option>
          <option value="102">Cancer</option>
          <option value="103">Head Specialist</option>
          <option value="104">Tests</option>
          <option value="900">Others</option>
      </select>
  
     <div className="form-group">
      <input type="text" placeholder="Patient age" className="form-control" name="age" 
      value={detail?.age} onChange={inputHandler}/>
     </div>
  
     <div className="form-group">
      <textarea rows="5" className="form-control" placeholder="Description of issue" 
      name="description" value={detail?.description} onChange={inputHandler}></textarea>
     </div>
     <div className="form-group">
      <input type="file" className="form-control" name='myfile' onChange={uploadFile}/>
     </div>
  
     <div className="form-group">
     <button className="btn btn-primary">Submit</button>
     </div>
     </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
}  
