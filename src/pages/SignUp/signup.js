// // import React from 'react'

// // import { useState, useEffect } from "react";
// // import { useNavigate, Link } from "react-router-dom";

// // // function Signup() {

// // // const [Fname, setFname]=useState("")
// // // const [Mname, setMname]=useState("")
// // // const [Lname, setLname]=useState("")
// // // const [Email, setEmail]=useState("")
// // // const [Phone, setPhone]=useState("")
// // // const [Password, setPassword]=useState("")
// // // const [Cpassword, setCpassword]=useState("")
// // // const [Designation, setDesignation]=useState("")
// // // const [Adress, setAdress]=useState("")
// // // const [City, setCity]=useState("")
// // // const [Country, setCountry]=useState("")
// // // const [ZipCode, setZipcode]=useState("")
// // // const navigate = useNavigate();


// // // async function register(){

// // //     let item = {
// // //         Fname,
// // //         Mname,
// // //         Lname,
// // //         Email,
// // //         Phone,
// // //         Password,
// // //         Cpassword,
// // //         Designation,
// // //         Adress,
// // //         City,
// // //         Country,
// // //         ZipCode
// // //     }
// // //     console.log(Email,Password,Designation)
// // //     let result = await fetch("http://metics.us:8000/register/",{
// // //         method: 'POST',
// // //         body: JSON.stringify(item),
// // //         headers:{
// // //             "Content-Type": 'application/json',
// // //         }
// // //     })

// // //     result = await result.json()
// // //     localStorage.setItem("user-info", JSON.stringify(result))
// // //     navigate("/")
// // // }

// // //   return (
// // //     <div className='col-sm-6 offset-sm-3'>
// // //         <h1>Register</h1>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
// // //         <br/>
// // //         <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
// // //         <br/>
// // //         <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/>
// // //         <br/>
// // //         <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/>
// // //         <br/>
// // //         <button onClick={register} className='btn btn-primary'>Sign Up</button>
// // //     </div>
// // //   )
// // // }

// // // export default Signup


// // import "bootstrap/dist/css/bootstrap.min.css";
// // import { Form, Button } from "react-bootstrap";
// // import styles from "./SignUp.module.css";
// // import { useAuth } from '../context/AuthContext';
// // import { toast } from 'react-toastify';
// // // import ValidationError from '../errorHandler/ValidationError';
// // // import ValidationError from '../errorHandler/ValidationError';
// // import AccountRequests from '../requests/AccountApi';

// // const SignUp = () => {

// // //     const [Fname, setFname]=useState("")
// // // const [Mname, setMname]=useState("")
// // // const [Lname, setLname]=useState("")
// // // const [Email, setEmail]=useState("")
// // // const [Phone, setPhone]=useState("")
// // // const [Password, setPassword]=useState("")
// // // const [Cpassword, setCpassword]=useState("")
// // // const [Designation, setDesignation]=useState("")
// // // const [Adress, setAdress]=useState("")
// // // const [City, setCity]=useState("")
// // // const [Country, setCountry]=useState("")
// // // const [ZipCode, setZipcode]=useState("")
// // // const navigate = useNavigate();

// // // const [isLoading, setIsLoading] = useState(false);

// // const [form, setForm] = useState({
// //          Fname: '',
// //         Mname: '',
// //         Lname: '',
// //         Email: '',
// //         Phone: '',
// //         Password: '',
// //         Cpassword: '',
// //         Designation: '',
// //         Adress: '',
// //         City: '',
// //         Country: '',
// //         ZipCode: '',
// // })
// // const { user, login } = useAuth()
// //     const navigate = useNavigate()
// //     useEffect(() => {
// //       if (user) {
// //           navigate('/')
// //       } else {
// //           const usr = localStorage.getItem('user')
// //           if (usr) {
// //               login(JSON.parse(usr))
// //               navigate('/')
// //           }
// //       }
// //   }, [])

// //   const handleFormSubmit = async (e) => {
// //     e.preventDefault()
// //     try {
// //         const user = await AccountRequests.createUser({
// //             email: form.email,
// //             password: form.password,
// //         })
// //         console.log(user)
// //         await login(user)
// //         navigate('/')
// //     } catch (err) {
// //         // if (err instanceof ValidationError) {
// //           if(err){
// //             toast(err.message, {
// //                 type: 'error',
// //             })
// //             return
// //         }
// //         toast('Something went wrong!', {
// //             type: 'error',
// //         })
// //     }
// // }

// // const handleInputChange = (e) => {
// //     setForm({ ...form, [e.target.name]: e.target.value })
// // }

// //   // const handleSubmit = (event) => {
// //   //   event.preventDefault();
// //   //   setIsLoading(true);

// //   //   fetch('http://metics.us:8000/register/', {
// //   //     method: 'POST',
// //   //     headers: {
// //   //       'Content-Type': 'application/json',
// //   //     },
// //   //     body: JSON.stringify({ Fname,
// //   //       Mname,
// //   //       Lname,
// //   //       Email,
// //   //       Phone,
// //   //       Password,
// //   //       Cpassword,
// //   //       Designation,
// //   //       Adress,
// //   //       City,
// //   //       Country,
// //   //       ZipCode}),
// //   //   })
// //   //     .then((response) => response.json())
// //   //     .then((data) => {
// //   //       setIsLoading(false);
// //   //       // Display a success message
// //   //       localStorage.setItem("user-info", JSON.stringify(data))
// //   //       console.log("success")
// //   //   // navigate("/")
// //   //     })
// //   //     .catch((error) => {
// //   //       setIsLoading(false);
// //   //       // Display an error message

// //   //       console.log("Error happened")
// //   //     });
// //   // };


// // // async function register(){

// // //     let item = {
// // //         Fname,
// // //         Mname,
// // //         Lname,
// // //         Email,
// // //         Phone,
// // //         Password,
// // //         Cpassword,
// // //         Designation,
// // //         Adress,
// // //         City,
// // //         Country,
// // //         ZipCode
// // //     }
// // //     console.log(Email,Password,Designation)
// // //     let result = await fetch("http://metics.us:8000/register/",{
// // //         method: 'POST',
// // //         body: JSON.stringify(item),
// // //         headers:{
// // //             "Content-Type": 'application/json',
// // //         }
// // //     })

// // //     result = await result.json()
// // //     localStorage.setItem("user-info", JSON.stringify(result))
// // //     navigate("/")
// // // }
// //   return (
// //     <Form onSubmit={handleFormSubmit}>
// //       <div className={styles.signUp}>
       
// //       <div className={styles.content}>
// //         <div className={styles.background} />
// //         <div className={styles.text}>
// //           <b className={styles.title}>Sign up for an account</b>
// //           <div className={styles.body}>Create new possibilities with us</div>
// //         </div>
// //         <div className={styles.input}>
// //           <div className={styles.emailParent}>
// //             <Form.Group className={styles.emailFormgroup}>
// //               <Form.Label>First name</Form.Label>
// //               {/* <Form.Control type="text" placeholder="First Name" />
// //                */}
// //                <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your First Name"
// //                             name="Fname"
// //                             value={form.Fname}
// //                             onChange={handleInputChange}
// //                         />
// //                {/* <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/> */}
// //             </Form.Group>
// //             <Form.Group className={styles.emailFormgroup}>
// //               <Form.Label>Middle name</Form.Label>
// //               <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Middle Name"
// //                             name="Mname"
// //                             value={form.Mname}
// //                             onChange={handleInputChange}
// //                         />
// //               {/* <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/> */}
// //             </Form.Group>
// //             <Form.Group className={styles.emailFormgroup}>
// //               <Form.Label>Last name</Form.Label>
// //               {/* <Form.Control type="text" placeholder="Last Name" /> */}
// //               <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Last Name"
// //                             name="Lname"
// //                             value={form.Lname}
// //                             onChange={handleInputChange}
// //                         />
// //               {/* <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/> */}
// //             </Form.Group>
// //           </div>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Password</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Password" /> */}
// //             <input
// //                             type="password"
// //                             bootstrapIcon="bi-lock"
// //                             placeholder="Password"
// //                             name="Password"
// //                             value={form.Password}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Confirm Password</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Confirm Password" /> */}
// //             <input
// //                             type="password"
// //                             bootstrapIcon="bi-lock"
// //                             placeholder="Password"
// //                             name="CPassword"
// //                             value={form.CPassword}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Email</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Email" /> */}
// //             <input
// //                             type="email"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Email"
// //                             name="Email"
// //                             value={form.Email}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Phone</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Phone" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Phone Number"
// //                             name="Phone"
// //                             value={form.Phone}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Designation</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Designation" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Designation"
// //                             name="Designation"
// //                             value={form.Designation}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Address</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Address" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Address"
// //                             name="Adress"
// //                             value={form.Adress}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>City</Form.Label>
// //             {/* <Form.Control type="text" placeholder="City" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your City"
// //                             name="City"
// //                             value={form.City}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>Country</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Country" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Your Country"
// //                             name="Country"
// //                             value={form.Country}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/> */}
// //           </Form.Group>
// //           <Form.Group className={styles.passwordFormgroup}>
// //             <Form.Label>ZipCode</Form.Label>
// //             {/* <Form.Control type="text" placeholder="Zipcode" /> */}
// //             <input
// //                             type="text"
// //                             bootstrapIcon="bi-envelope"
// //                             placeholder="Zipcode"
// //                             name="Zipcode"
// //                             value={form.Zipcode}
// //                             onChange={handleInputChange}
// //                         />
// //             {/* <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/> */}
// //           </Form.Group>
// //         </div>
// //         <Button className={styles.button} 
// //         type="submit"
// //         // disabled={isLoading}
// //         // onClick={register} 
// //         variant="primary">
// //           Sign Up
// //         </Button>
        
// //             <li>

// //             {/* <link className={styles.signIn} to='/'>Sign In</link> */}
// //             </li>
// //         <div className={styles.alreadyHaveAnAccountSign}>
// //           <span className={styles.alreadyHaveAnContainer}>
// //             <span
// //               className={styles.alreadyHaveAn}
// //             >{`Already have an account? `}</span>
// //             {/* <span className={styles.signIn} > 
// //             <link to='/'>Sign In</link>
// //             </span> */}
// //           </span>
// //         </div>
// //         {/* <div className={styles.byCreatingAnAccountYouAg}>
// //           <span className={styles.alreadyHaveAnContainer}>
// //             <span
// //               className={styles.alreadyHaveAn}
// //             >{`By creating an account, you agreeing to our `}</span>
// //             <span className={styles.privacyPolicy}>Privacy Policy</span>
// //             <span className={styles.alreadyHaveAn}>{`, and `}</span>
// //             <span className={styles.privacyPolicy}>
// //               Electronics Communication Policy.
// //             </span>
// //           </span>
// //         </div> */}
// //         {/* <div className={styles.text1}>
// //           <div className={styles.privacyPolicy1}>Privacy Policy</div>
// //           <div className={styles.copyright2022}>Copyright 2022</div>
// //         </div> */}
// //       </div>
// //       {/* <img className={styles.asset24x1} alt="" src="../asset-24x-1@2x.png" /> */}
// //       <img className={styles.asset24x1} alt="" src={require('../images/logo.png')} />
// //     </div>
// //     </Form>
// //   );
// // };

// // export default SignUp;



// import React from 'react'

// import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

// // function Signup() {

// // const [Fname, setFname]=useState("")
// // const [Mname, setMname]=useState("")
// // const [Lname, setLname]=useState("")
// // const [Email, setEmail]=useState("")
// // const [Phone, setPhone]=useState("")
// // const [Password, setPassword]=useState("")
// // const [Cpassword, setCpassword]=useState("")
// // const [Designation, setDesignation]=useState("")
// // const [Adress, setAdress]=useState("")
// // const [City, setCity]=useState("")
// // const [Country, setCountry]=useState("")
// // const [ZipCode, setZipcode]=useState("")
// // const navigate = useNavigate();


// // async function register(){

// //     let item = {
// //         Fname,
// //         Mname,
// //         Lname,
// //         Email,
// //         Phone,
// //         Password,
// //         Cpassword,
// //         Designation,
// //         Adress,
// //         City,
// //         Country,
// //         ZipCode
// //     }
// //     console.log(Email,Password,Designation)
// //     let result = await fetch("http://metics.us:8000/register/",{
// //         method: 'POST',
// //         body: JSON.stringify(item),
// //         headers:{
// //             "Content-Type": 'application/json',
// //         }
// //     })

// //     result = await result.json()
// //     localStorage.setItem("user-info", JSON.stringify(result))
// //     navigate("/")
// // }

// //   return (
// //     <div className='col-sm-6 offset-sm-3'>
// //         <h1>Register</h1>
// //         <br/>
// //         <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
// //         <br/>
// //         <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
// //         <br/>
// //         <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/>
// //         <br/>
// //         <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/>
// //         <br/>
// //         <button onClick={register} className='btn btn-primary'>Sign Up</button>
// //     </div>
// //   )
// // }

// // export default Signup


// import "bootstrap/dist/css/bootstrap.min.css";
// import { Form, Button } from "react-bootstrap";
// import styles from "./SignUp.module.css";

// const SignUp = () => {

//     const [Fname, setFname]=useState("")
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
//     <div className={styles.signUp}>
//       <div className={styles.content}>
//         <div className={styles.background} />
//         <div className={styles.text}>
//           <b className={styles.title}>Sign up for an account</b>
//           <div className={styles.body}>Create new possibilities with us</div>
//         </div>
//         <div className={styles.input}>
//           <div className={styles.emailParent}>
//             <Form.Group className={styles.emailFormgroup}>
//               <Form.Label>First name</Form.Label>
//               {/* <Form.Control type="text" placeholder="First Name" />
//                */}
//                <input type="text" onChange={(e)=>setFname(e.target.value)} className='form-control' placeholder='First Name'/>
//             </Form.Group>
//             <Form.Group className={styles.emailFormgroup}>
//               <Form.Label>Middle name</Form.Label>
//               <input type="text" onChange={(e)=>setMname(e.target.value)} className='form-control' placeholder='Middle Name'/>
//             </Form.Group>
//             <Form.Group className={styles.emailFormgroup}>
//               <Form.Label>Last name</Form.Label>
//               {/* <Form.Control type="text" placeholder="Last Name" /> */}
//               <input type="text" onChange={(e)=>setLname(e.target.value)} className='form-control' placeholder='Last Name'/>
//             </Form.Group>
//           </div>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Password</Form.Label>
//             {/* <Form.Control type="text" placeholder="Password" /> */}
//             <input type="password" onChange={(e)=>setPassword(e.target.value)} className='form-control' placeholder='Password'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Confirm Password</Form.Label>
//             {/* <Form.Control type="text" placeholder="Confirm Password" /> */}
//             <input type="password" onChange={(e)=>setCpassword(e.target.value)} className='form-control' placeholder='Confirm Password'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Email</Form.Label>
//             {/* <Form.Control type="text" placeholder="Email" /> */}
//             <input type="text" onChange={(e)=>setEmail(e.target.value)} className='form-control' placeholder='Email'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Phone</Form.Label>
//             {/* <Form.Control type="text" placeholder="Phone" /> */}
//             <input type="text" onChange={(e)=>setPhone(e.target.value)} className='form-control' placeholder='Phone'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Designation</Form.Label>
//             {/* <Form.Control type="text" placeholder="Designation" /> */}
//             <input type="text" onChange={(e)=>setDesignation(e.target.value)} className='form-control' placeholder='Designation'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Address</Form.Label>
//             {/* <Form.Control type="text" placeholder="Address" /> */}
//             <input type="text" onChange={(e)=>setAdress(e.target.value)} className='form-control' placeholder='Adress'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>City</Form.Label>
//             {/* <Form.Control type="text" placeholder="City" /> */}
//             <input type="text" onChange={(e)=>setCity(e.target.value)} className='form-control' placeholder='City'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>Country</Form.Label>
//             {/* <Form.Control type="text" placeholder="Country" /> */}
//             <input type="text" onChange={(e)=>setCountry(e.target.value)} className='form-control' placeholder='Country'/>
//           </Form.Group>
//           <Form.Group className={styles.passwordFormgroup}>
//             <Form.Label>ZipCode</Form.Label>
//             {/* <Form.Control type="text" placeholder="Zipcode" /> */}
//             <input type="text" onChange={(e)=>setZipcode(e.target.value)} className='form-control' placeholder='ZipCode'/>
//           </Form.Group>
//         </div>
//         <Button className={styles.button} onClick={register} variant="primary">
//           Sign Up
//         </Button>
//         <div className={styles.alreadyHaveAnAccountSign}>
//           <span className={styles.alreadyHaveAnContainer}>
//             <span
//               className={styles.alreadyHaveAn}
//             >{`Already have an account? `}</span>
//             <span className={styles.signIn}>Sign In</span>
//           </span>
//         </div>
//         {/* <div className={styles.byCreatingAnAccountYouAg}>
//           <span className={styles.alreadyHaveAnContainer}>
//             <span
//               className={styles.alreadyHaveAn}
//             >{`By creating an account, you agreeing to our `}</span>
//             <span className={styles.privacyPolicy}>Privacy Policy</span>
//             <span className={styles.alreadyHaveAn}>{`, and `}</span>
//             <span className={styles.privacyPolicy}>
//               Electronics Communication Policy.
//             </span>
//           </span>
//         </div> */}
//         {/* <div className={styles.text1}>
//           <div className={styles.privacyPolicy1}>Privacy Policy</div>
//           <div className={styles.copyright2022}>Copyright 2022</div>
//         </div> */}
//       </div>
//       <img className={styles.asset24x1} alt="" src={require('../images/logo.png')} />
//     </div>
//   );
// };

// export default SignUp;


import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
// import "./SignUp.module.css";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="sign-up">
      <div className="content">
        <div className="background" />
        <div className="text">
          <b className="title">Sign up for an account</b>
          <div className="body">Create new possibilities with us</div>
        </div>
        <div className="input">
          <div className="email-parent">
            <Form.Group className="email-formgroup">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="First Name" />
            </Form.Group>
            <Form.Group className="email-formgroup">
              <Form.Label></Form.Label>
              <Form.Control type="text" placeholder="Middle Name" />
            </Form.Group>
          </div>
          <Form.Group className="email-formgroup2">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Last Name" />
          </Form.Group>
          <Form.Group className="email-formgroup3">
            <Form.Label></Form.Label>
            <Form.Control type="text" placeholder="Email" />
          </Form.Group>
        </div>
      </div>
      <Form.Group className="password-formgroup">
        {/* <Form.Label></Form.Label> */}
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Form.Group className="password-formgroup1">
        {/* <Form.Label></Form.Label>    */}
        <Form.Control type="text" placeholder="Confirm Password" />
      </Form.Group>
      <Form.Group className="email-formgroup4">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Form.Group className="email-formgroup5">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="Phone" />
      </Form.Group>
      <Form.Group className="email-formgroup6">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="Designation" />
      </Form.Group>
      <Form.Group className="email-formgroup7">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="Address" />
      </Form.Group>
      <Form.Group className="email-formgroup8">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="City" />
      </Form.Group>
      <Form.Group className="email-formgroup9">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="Country" />
      </Form.Group>
      
      <Form.Group className="email-formgroup10">
        {/* <Form.Label>Email</Form.Label> */}
        <Form.Control type="text" placeholder="ZipCode" />
      </Form.Group>
      <div className="by-creating-an-container">
          <span className="by-creating-an-container1">
            <span className="by-creating-an">{`By creating an account, you agreeing to our `}</span>
            <span className="privacy-policy">Privacy Policy</span>
            <span className="by-creating-an">{`, and `}</span>
            <span className="privacy-policy">
              Electronics Communication Policy.
            </span>
          </span>
        </div>
      
      <img className="asset-24x-1" alt="" src={require('../images/logo.png')} />
      <Button className="button" variant="primary">
        Sign Up
      </Button>
    </div>
  );
};

export default SignUp;
