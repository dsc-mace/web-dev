import React from 'react'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {

const [Fname, setFname]=useState("")
const [Mname, setMname]=useState("")
const [Lname, setLname]=useState("")
const [Email, setEmail]=useState("")
const [Phone, setPhone]=useState("")
const [Password, setPassword]=useState("")
const [Cpassword, setCpassword]=useState("")
const [Designation, setDesignation]=useState("")
const [Adress, setAdress]=useState("")
const [City, setCity]=useState("")
const [Country, setCountry]=useState("")
const [ZipCode, setZipcode]=useState("")
const navigate = useNavigate();


async function register(){

    let item = {
        Fname,
        Mname,
        Lname,
        Email,
        Phone,
        Password,
        Cpassword,
        Designation,
        Adress,
        City,
        Country,
        ZipCode
    }
    console.log(Email,Password,Designation)
    let result = await fetch("http://metics.us:8000/register/",{
        method: 'POST',
        body: JSON.stringify(item),
        headers:{
            "Content-Type": 'application/json',
        }
    })

    result = await result.json()
    localStorage.setItem("user-info", JSON.stringify(result))
    navigate("/")
}

  return (
    <div className='col-sm-6 offset-sm-3'>
        <h1>Register</h1>
        <br/>
        <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/>
        <br/>
        <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/>
        <br/>
        <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/>
        <br/>
        <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
        <br/>
        <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
        <br/>
        <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
        <br/>
        <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
        <br/>
        <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/>
        <br/>
        <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/>
        <br/>
        <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/>
        <br/>
        <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/>
        <br/>
        <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/>
        <br/>
        <button onClick={register} className='btn btn-primary'>Sign Up</button>
    </div>
  )
}

export default Signup