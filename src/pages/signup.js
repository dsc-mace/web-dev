// import React from 'react'

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// function Signup() {

// const [Fname, setFname]=useState("")
// const [Mname, setMname]=useState("")
// const [Lname, setLname]=useState("")
// const [Email, setEmail]=useState("")
// const [Phone, setPhone]=useState("")
// const [Password, setPassword]=useState("")
// const [Cpassword, setCpassword]=useState("")
// const [Designation, setDesignation]=useState("")
// const [Adress, setAdress]=useState("")
// const [City, setCity]=useState("")
// const [Country, setCountry]=useState("")
// const [ZipCode, setZipcode]=useState("")
// const navigate = useNavigate();


// async function register(){

//     let item = {
//         Fname,
//         Mname,
//         Lname,
//         Email,
//         Phone,
//         Password,
//         Cpassword,
//         Designation,
//         Adress,
//         City,
//         Country,
//         ZipCode
//     }
//     console.log(Email,Password,Designation)
//     let result = await fetch("http://metics.us:8000/register/",{
//         method: 'POST',
//         body: JSON.stringify(item),
//         headers:{
//             "Content-Type": 'application/json',
//         }
//     })

//     result = await result.json()
//     localStorage.setItem("user-info", JSON.stringify(result))
//     navigate("/")
// }

//   return (
//     <div className='col-sm-6 offset-sm-3'>
//         <h1>Register</h1>
//         <br/>
//         <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/>
//         <br/>
//         <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/>
//         <br/>
//         <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/>
//         <br/>
//         <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
//         <br/>
//         <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
//         <br/>
//         <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
//         <br/>
//         <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
//         <br/>
//         <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/>
//         <br/>
//         <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/>
//         <br/>
//         <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/>
//         <br/>
//         <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/>
//         <br/>
//         <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/>
//         <br/>
//         <button onClick={register} className='btn btn-primary'>Sign Up</button>
//     </div>
//   )
// }

// export default Signup


import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./SignUp.module.css";

const SignUp = () => {
  return (
    <div className={styles.signUp}>
      <div className={styles.content}>
        <div className={styles.background} />
        <div className={styles.text}>
          <b className={styles.title}>Sign up for an account</b>
          <div className={styles.body}>Create new possibilities with us</div>
        </div>
        <div className={styles.input}>
          <div className={styles.emailParent}>
            <Form.Group className={styles.emailFormgroup}>
              <Form.Label>First name</Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className={styles.emailFormgroup}>
              <Form.Label>Middle name</Form.Label>
              <Form.Control type="text" placeholder="Middle Name" />
            </Form.Group>
            <Form.Group className={styles.emailFormgroup}>
              <Form.Label>Last name</Form.Label>
              <Form.Control type="text" placeholder="Last Name" />
            </Form.Group>
          </div>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" placeholder="Password" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="text" placeholder="Confirm Password" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Phone</Form.Label>
            <Form.Control type="text" placeholder="Phone" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" placeholder="Designation" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" placeholder="Address" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>City</Form.Label>
            <Form.Control type="text" placeholder="City" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>Country</Form.Label>
            <Form.Control type="text" placeholder="Country" />
          </Form.Group>
          <Form.Group className={styles.passwordFormgroup}>
            <Form.Label>ZipCode</Form.Label>
            <Form.Control type="text" placeholder="Zipcode" />
          </Form.Group>
        </div>
        <Button className={styles.button} variant="primary">
          Sign Up
        </Button>
        <div className={styles.alreadyHaveAnAccountSign}>
          <span className={styles.alreadyHaveAnContainer}>
            <span
              className={styles.alreadyHaveAn}
            >{`Already have an account? `}</span>
            <span className={styles.signIn}>Sign In</span>
          </span>
        </div>
        {/* <div className={styles.byCreatingAnAccountYouAg}>
          <span className={styles.alreadyHaveAnContainer}>
            <span
              className={styles.alreadyHaveAn}
            >{`By creating an account, you agreeing to our `}</span>
            <span className={styles.privacyPolicy}>Privacy Policy</span>
            <span className={styles.alreadyHaveAn}>{`, and `}</span>
            <span className={styles.privacyPolicy}>
              Electronics Communication Policy.
            </span>
          </span>
        </div> */}
        {/* <div className={styles.text1}>
          <div className={styles.privacyPolicy1}>Privacy Policy</div>
          <div className={styles.copyright2022}>Copyright 2022</div>
        </div> */}
      </div>
      <img className={styles.asset24x1} alt="" src="../asset-24x-1@2x.png" />
    </div>
  );
};

export default SignUp;
