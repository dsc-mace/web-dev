import React from "react"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'

import LogoImage from '../../assets/images/logo.png'
import HandshakeImage from '../../assets/images/handshake.png'
import styles from './ForgotPassword.module.scss'

import AuthContext from "../../context/AuthContext"
import { useContext } from "react"
import InputWithError from "../../components/InputWithError/InputWithError"
import { useEffect } from "react"

const OPT_RESENT_TIME = 20

const ForgotPassword = () => {
    const [page, setPage] = useState(1)
    
    const [email, setEmail] = useState("")
    const [emailError, setEmailError] = useState("")
    const [userId, setUserId] = useState("")

    const [otp, setOtp] = useState("")
    const [otpError, setOtpError] = useState("")
    const [otpResentDisabled, setOtpResentDisabled] = useState(false)
    const [time, setTime] = useState(OPT_RESENT_TIME)

    const [password, setPassword] = useState("")

    const navigate = useNavigate()

    let intervalId

    const startTimer = () => {
        intervalId = setInterval(() => {
            setTime(prev => {
                if(prev <= 0) {
                    setOtpResentDisabled(false)
                    setTime(OPT_RESENT_TIME)
                    clearInterval(intervalId)
                    return OPT_RESENT_TIME
                }
                else {
                    return (prev - 1)
                }
            })
        }, 1000)
    }

    const handleEmailSubmit = async () => {
        console.log("email submit")
        const res = await fetch("http://metics.us:8000/reset-password/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                "email": email
            })
        })
        if(!res.ok) {
            toast("Some error occured! Try again", {
                type: "error"
            })
            return
        }
        const data = await res.json()
        setUserId(data["user_id"])
        console.log(data["user_id"])
        toast("OTP sent to your email", {
            type: "success"
        })
        setPage(2)
        setOtpResentDisabled(true)
        startTimer()
    }

    const handleOtpSubmit = async () => {
        // console.log({otp})
        setPage(3)
    }
    
    const handlePasswordSubmit = async () => {
        console.log({
            otp,
            "new_password": password
        })
        const res = await fetch(`http://metics.us:8000/reset-password/${userId}/`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                otp,
                "new_password": password
            })
        })
        if(!res.ok) {
            if(res.status === 400) {
                const data = await res.json()
                toast(data["message"], {
                    type: "error"
                })
                return
            }
            toast("Some error occured!", {
                type: "error"
            })
            return
        }
        toast("Password has been reset", {
            type: "success"
        })
        navigate("/login")
    }
    

    return (
        <div>
            <form>
                {
                    page === 1 &&
                    <>
                        <label>Reset Password</label>
                        <InputWithError name="email" onChange={(e) => setEmail(e.target.value)} placeholder="Enter your email" type="email" errorMsg={emailError}/>
                        <button type="button" onClick={handleEmailSubmit}>Next</button>
                    </>
                }
                {
                    page === 2 &&
                    <>
                        <label>Enter OTP</label>
                        <InputWithError name="email" onChange={(e) => setOtp(e.target.value)} placeholder="Enter Otp" type="text" errorMsg={otpError}/>
                        <button type="button" onClick={handleOtpSubmit}>Next</button>
                        <button type="button" onClick={handleEmailSubmit} disabled={otpResentDisabled}>Resent OTP</button>
                        {
                            <span>{time}s</span>
                        }
                    </>
                }
                {
                    page === 3 &&
                    <>
                        <InputWithError name="password" onChange={(e) => setPassword(e.target.value)} placeholder="Enter new password" type="email" errorMsg={emailError}/>
                        <button type="button" onClick={handlePasswordSubmit}>submit</button>
                    </>
                }
            </form>
        </div>
    )
}

export default ForgotPassword