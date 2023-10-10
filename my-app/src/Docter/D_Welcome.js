import React from 'react'
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function D_Welcome() {

    var data = JSON.parse(localStorage.getItem('did'));
    console.log(data);

    // const[Bone,setBone]=useState({
    //     category:data.id
    // })

    const[product,setProduct]=useState();

    function fetchData(){
        axios.get("http://localhost:1234/fetchDetail")
        .then(res=>{
             console.log(res.data)
           
        }).catch(err=>{console.log(err)})
    }

    useEffect(()=>{
        fetchData();
    },[])

  return (
    <div>
      <h2 className='text-center mt-3'>Welcome Docter</h2>
      <div className='container mt-5'>
        <div className='row'>
            <div className='col-md-12'>
                {/* <form className='form'>
                <input type="text" name="category" value={Bone?.category} onChange={e=>setBone(e.target.value)}/>
                </form> */}
                <table id='' className='table table-striped table-bordered' 
                style={{width:"100%"}}>
                    <thead>
                        <tr>
                            <th>Patient Name</th>
                            <th>Category</th>
                            <th>Age</th>
                            <th>Detail</th>
                            <th>Attachment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {/* {
                                product.map(pDetail=>
                                    <tr key={pDetail._id}>
                                        <td>{pDetail.pname}</td>
                                        <td>{pDetail.category}</td>
                                        <td>{pDetail.age}</td>
                                        <td>{pDetail.description}</td>
                                        <td><a href={`http://localhost:1234/${pDetail.attachment}`}>Download</a></td>
                                    </tr>
                                    )
                            } */}
                        </tbody>
                    
                </table>
            </div>
        </div>
      </div>
    </div>
  )
}
