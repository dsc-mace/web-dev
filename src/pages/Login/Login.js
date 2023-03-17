import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { Oval } from 'react-loader-spinner'

import LogoImage from '../../assets/images/logo.png'
import HandshakeImage from '../../assets/images/handshake.png'
import styles from './Login.module.scss'

import AuthContext from '../../context/AuthContext'
import { useContext } from 'react'

const Login = () => {
    const [form, setForm] = useState({})
    const [spinnerActive, setSpinnerActive] = useState(false)

    const navigate = useNavigate()

    const { user, login, logout } = useContext(AuthContext)

    const handleSubmit = (e) => {
        e.preventDefault()

        if (spinnerActive) return
        setSpinnerActive(true)

        console.log(form)

        const asyncFunc = async () => {
            const res = await fetch('http://metics.us:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            })
            if (!res.ok) {
                console.log('toastify')
                toast("Couldn't Login!", {
                    type: 'error',
                })
                setSpinnerActive(false)
                return
            }
            const data = await res.json()
            await login(data)
            await setSpinnerActive(false)
            navigate('/organization/dashboard')
            console.log(data)
        }
        asyncFunc()
    }

    const handleInputChange = (e) => {
        setForm((prev) => {
            return {
                ...prev,
                [e.target.name]: e.target.value,
            }
        })
    }

    return (
        <div className={styles.Login}>
            <div className={styles.Login__sections}>
                <section className={styles.Login__sections__left}>
                    <div className={styles.Login__logoContainer}>
                        <img
                            className={styles.Login__logo}
                            src={LogoImage}
                            alt="logo"
                        />
                    </div>
                    <div className={styles.Login__contentContainer}>
                        <h1 className={styles.Login__title}>
                            <span className={styles.Login__title__sub}>
                                Welcome to Metics
                            </span>
                            <span className={styles.Login__title__main}>
                                Sign in
                            </span>
                        </h1>
                        <form
                            className={styles.Login__form}
                            onSubmit={handleSubmit}
                        >
                            <div className={styles.Login__formGroup}>
                                <input
                                    className={styles.Login__formInput}
                                    type="email"
                                    placeholder="Username or email"
                                    name="email"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.Login__formGroup}>
                                <input
                                    className={styles.Login__formInput}
                                    type="password"
                                    placeholder="Password"
                                    name="password"
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className={styles.Login__formRow}>
                                <div
                                    className={`${styles.Login__formGroup} ${styles.Login__formRememberContainer}`}
                                >
                                    <input
                                        className={
                                            styles.Login__formInput__checkbox
                                        }
                                        type="checkbox"
                                        id="remember-me"
                                    />
                                    <label htmlFor="remember-me">
                                        Remember me
                                    </label>
                                </div>
                                <Link
                                    className={styles.Login__formForgotPassword}
                                    to="/forgot-password"
                                >
                                    Forgot Password?
                                </Link>
                            </div>
                            <button
                                type="submit"
                                className={styles.Login__formBtn}
                            >
                                <span>Sign In</span>&nbsp;
                                <Oval
                                    height={20}
                                    width={20}
                                    color="#ffffff"
                                    wrapperStyle={{}}
                                    wrapperClass=""
                                    visible={spinnerActive}
                                    ariaLabel="oval-loading"
                                    secondaryColor="#bbbbbb"
                                    strokeWidth={6}
                                    strokeWidthSecondary={6}
                                />
                            </button>
                            <p className={styles.Login__formRegisterText}>
                                Don't have an account?{' '}
                                <Link to="/register">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </section>
                <section className={styles.Login__sections__right}>
                    <div className={styles.Login__carouselContainer}>
                        <div className={styles.Login__carouselImageContainer}>
                            <img
                                className={styles.Login__carouselImage}
                                src={HandshakeImage}
                            />
                        </div>
                        <h1 className={styles.Login__carouselText}>
                            Catalyst your business
                        </h1>
                        <p className={styles.Login__carouselDescription}>
                            Metics help you connect to wide range of vendors and
                            customers and help you stream line your buying or
                            selling process by harnessing our unbeatable
                            business managing tools
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login
