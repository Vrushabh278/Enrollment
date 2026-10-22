import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'



const AddStudent = () => {
    const[name,setName]=useState("")
    const[email,setMail]=useState("")
    const[phone,setPhone]=useState("")
    const[department,setDepartment]=useState("")
    const[course,setCourse]=useState("")
    const navigate = useNavigate()

    const handleForm = (e)=>{
        e.preventDefault()
        const data={name,email,phone,department,course}
        axios.post("http://127.0.0.1:8000/students/",data)
        .then(()=>{
            setName("")
            setMail("")
            setPhone("")
            setDepartment("")
            setCourse("")
            navigate("/viewstudent")
        })
        .catch(err=>console.log(err))
    }
  return (
    <>
    <center><h1>Add Student</h1></center>
    <center>
        <form action="" onSubmit={handleForm}>
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

            <button>Add student</button>
        </form>
    </center>
    </>
  )
}

export default AddStudent