import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ViewStudent = () => {

  const[students,setStudents]=useState([])
  const navigate = useNavigate()
 
  function fetchData(){
   axios.get("http://127.0.0.1:8000/students/")
  .then(res=>setStudents(res.data))
  .catch(err=>console.log(err))
  }
  useEffect(()=>{
    fetchData()
  },[])


  const handleUpdate = (id)=>{
    navigate(`/updatestudent/${id}`)
  }

  const handleDelete=(id)=>{
    axios.delete(`http://127.0.0.1:8000/students/${id}`)
    .then(()=>{
       fetchData()
    })
    .catch(err=>console.log(err))
  }
  return (
    <>
      <center><h1>List of Students</h1></center>
      {students.map((x)=>{
         return <div key={x.id}>  
          <h2>Name: {x.name}</h2>
          <p><b>Mail: </b>{x.email}</p>
          <p><b>phone: </b>{x.phone}</p>
          <p><b>Department: </b>{x.department}</p>
          <p><b>Course: </b>{x.course}</p>
          <button onClick={()=>{handleUpdate(x.id)}}>Edit</button>
          <button onClick={()=>{handleDelete(x.id)}}>Delete</button>
         </div>
      }
      )}
    </>
  )
}

export default ViewStudent