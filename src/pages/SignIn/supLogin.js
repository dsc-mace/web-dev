// import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// function SupLogin() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const navigate = useNavigate();
//   useEffect(() => {
//     if (localStorage.getItem("user-info")) {
//       navigate.push("/Dashboard");
//     }
//   });
// async function login(){
//   console.log(email, password);
//   let item = {email, password};
//   let result = await fetch("http://metics.us:8000/login/",
//   {
//     method:'POST',
//     headers:{
//       "Content-Type":"application/json",
//     },
//     body:JSON.stringify(item)
//   });
//   result = await result.json();
//   localStorage.setItem("user-info",JSON.stringify(result))
//   navigate("/Dashboard")
// }

//   return (
//     <div>
//       <div className="col-sm-3 offset-sm-3 mt-4">
//         <h1>Supplier Login</h1>
//         <br />

//         <input type="text" onChange={(e)=>setEmail(e.target.value)} placeholder="Email" className="form-control" />
//         <br />
//         <input
//           type="password"
//           onChange={(e)=>setPassword(e.target.value)}
//           placeholder="Password"
//           className="form-control"
//         />
//         <br />
//         <button onClick={login} className="btn btn-primary">Login</button>
//       </div>
//     </div>
//   );
// }

// export default SupLogin;

import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import styles from "./SignIn.module.css";

const SupLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate(); 
  const location = useLocation();
  // useEffect(() => {
  //   if (localStorage.getItem("user-info")) {
  //     navigate  ("/Dashboard");
  //   }
  // });

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   setIsLoading(true);

  //   fetch('http://metics.us:8000/login/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify({ email, password }),
  //   })
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setIsLoading(false);
  //       // Store the user's token in a cookie or local storage
  //       // Redirect the user to the homepage
  //       localStorage.setItem("user-info", JSON.stringify(data));
  //       navigate("/Dashboard");
  //     })
  //     .catch((error) => {
  //       setIsLoading(false);
  //       // Display an error message
  //       console.log("Error");
  //     });
  // };





 
  async function login(e) {
    // console.log(email, password);
    // let item = { email, password };
    // let result = await fetch("http://metics.us:8000/login/", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(item),
    // });
    // result = await result.json();
    // localStorage.setItem("user-info", JSON.stringify(result));
    // navigate("/Dashboard");
    e.preventDefault();
    const url = "http://metics.us:8000/login/";
    fetch(url,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password,
      })
    })
    .then((response)=>{
      return response.json();
    }).then((data)=>{
      localStorage.setItem('access', data.access);
      localStorage.setItem('refresh', data.refresh);
      console.log(location);
      console.log(location.state);
      console.log(location?.state?.previousUrl);
      navigate(location?.state?.previousUrl ? location.state.previousUrl : '/Dashboard');
      // console.log(localStorage);
    });
  }
  return (
    // <form onSubmit={login}>

    <div className={styles.signIn}>
      <div className={styles.content}>
        <div className={styles.background} />
       {/* <img className="logo" src={require('../images/logo.png')} height={70} width={140} /> */}
        <div className={styles.text}>
          <div className={styles.body}>Welcome to Metics</div>
          <br/>
          <div className={styles.title}>Sign In</div>
        </div>
        <div className={styles.input}>
          <Form.Group  className={styles.emailFormGroup}>
            {/* <Form.Label>Username or email</Form.Label> */}
            <Form.Control value={email} onChange={(e)=>setEmail(e.target.value)} type="text" placeholder="Username or Email" />
          </Form.Group>
          <br />
          <Form.Group className={styles.emailFormGroup}>
            {/* <Form.Label>Password</Form.Label> */}
            <Form.Control value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
          </Form.Group>
        </div>
        <Button className={styles.button}
        //  disabled={isLoading}
        // onClick={handleSubmit}
        onClick={login}
         variant="primary">
          Sign In
        </Button>
        <div className={styles.frameDiv}>
          <div className={styles.remember}>
            {/* <img className={styles.checkIcon} alt="" src="../check.svg" /> */}
            <input type="checkbox" className={styles.checkIcon}></input>
            <div className={styles.rememberMe}>Remember me</div>
          </div>
          <div className={styles.forgotPassword}>Forgot Password?</div>
        </div>
        <div className={styles.dontHaveAnAccountSignUp}>
          <span className={styles.dontHaveAn}>{`Don’t have an account? `}</span>
          <span className={styles.signUp}>Sign Up</span>
        </div>
        <div className={styles.text1}>
          <div className={styles.rememberMe}>Privacy Policy</div>
          <div className={styles.copyright2023}>Copyright 2023</div>
        </div>
      </div>
      {/* <div className={styles.illustration}>
        <div className={styles.background1} />
        <div className={styles.title1}>
          <div className={styles.text2}>
            <div className={styles.title2}>Catalyse your business</div>
            <div className={styles.body1}>
              <p
                className={styles.meticsHelpYou}
              >{`Metics help you connect to wide range of vendors and customers and help you stream line your buying or selling  process by harnessing our `}</p>
              <p className={styles.unbeatableBusinessManaging}>
                unbeatable business managing tools
              </p>
            </div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
          </div>
        </div>
        <img className={styles.patternIcon} alt="" src="../pattern.svg" />
      </div>
      <div className={styles.illustration}>
        <div className={styles.background1} />
        <div className={styles.title1}>
          <div className={styles.text2}>
            <div className={styles.title2}>Catalyse your business</div>
            <div className={styles.body1}>
              <p
                className={styles.meticsHelpYou}
              >{`Metics help you connect to wide range of vendors and customers and help you stream line your buying or selling  process by harnessing our `}</p>
              <p className={styles.unbeatableBusinessManaging}>
                unbeatable business managing tools
              </p>
            </div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
          </div>
        </div>
        <img className={styles.patternIcon} alt="" src="../pattern.svg" />
      </div>
      <div className={styles.illustration}>
        <div className={styles.background1} />
        <div className={styles.title1}>
          <div className={styles.text2}>
            <div className={styles.title2}>Catalyse your business</div>
            <div className={styles.body1}>
              <p
                className={styles.meticsHelpYou}
              >{`Metics help you connect to wide range of vendors and customers and help you stream line your buying or selling  process by harnessing our `}</p>
              <p className={styles.unbeatableBusinessManaging}>
                unbeatable business managing tools
              </p>
            </div>
          </div>
          <div className={styles.indicator}>
            <div className={styles.rectangleDiv} />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="../ellipse-81.svg"
            />
          </div>
        </div>
        <img className={styles.patternIcon} alt="" src="../pattern.svg" />
      </div>
      <img className={styles.handShake1} alt="" src="../hand-shake-1@2x.png" />
      <img className={styles.asset24x1} alt="" src="../asset-24x-1@2x.png" /> */}
      <img className={styles.asset24x1} alt="" src={require('../images/logo.png')} />
    </div>
 
  );
};

export default SupLogin;
