import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'



const UpdateStudent = () => {
  const[name,setName]=useState("")
  const[email,setMail]=useState("")
  const[phone,setPhone]=useState("")
  const[department,setDepartment]=useState("")
  const[course,setCourse]=useState("")
  const navigate = useNavigate()

  const{id}=useParams()
  useEffect(()=>{
    axios.get(`http://127.0.0.1:8000/students/${id}`)
    .then((response)=>{
       setName(response.data.name)
       setMail(response.data.email)
       setPhone(response.data.phone)
       setDepartment(response.data.department)
       setCourse(response.data.course)
    })
  },[])

  const handleUpdate = (e)=>{
    e.preventDefault()
    const data={name,email,phone,department,course}
    axios.put(`http://127.0.0.1:8000/students/${id}`,data)
    .then(()=>{
       navigate("/viewstudent")
    })
    .catch(err=>console.log(err))
  }

  return (
    <>
    <center><h1>Update Student</h1></center>
    <center>
        <form action="" onSubmit={handleUpdate}>
            <input type="text" placeholder="Enter Name" required value={name} onChange={(e)=>{
                setName(e.target.value)
            }}/><br/>


            <input type="text" placeholder="Enter Mail" required value={email} onChange={(e)=>{
                setMail(e.target.value)
            }}/><br/>

            <input type="text" placeholder="Enter Phone" required value={phone} onChange={(e)=>{
                setPhone(e.target.value)
            }}/><br/>


            <input type="text" placeholder="Enter Department" required value={department} onChange={(e)=>{
                setDepartment(e.target.value)
            }}/><br/>

             <input type="text" placeholder="Enter Course" required value={course} onChange={(e)=>{
                setCourse(e.target.value)
            }}/><br/>

            <button>Update student</button>
        </form>
    </center>
    </>
  )
}

export default UpdateStudent