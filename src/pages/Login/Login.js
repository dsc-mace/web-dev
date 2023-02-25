import React from "react"
import { Link } from "react-router-dom"
import LogoImage from '../../assets/images/logo.png'
import HandshakeImage from '../../assets/images/handshake.png'

import styles from './Login.module.scss'

const Login = () => {
    return (
        <div className={styles.Login}>
            <div className={styles.Login__sections}>
                <section className={styles.Login__sections__left}>
                    <div className={styles.Login__logoContainer}>
                        <img className={styles.Login__logo} src={LogoImage} alt="logo"/>
                    </div>
                    <div className={styles.Login__contentContainer}>
                        <h1 className={styles.Login__title}>
                            <span className={styles.Login__title__sub}>Welcome to Metics</span>
                            <span className={styles.Login__title__main}>Sign in</span>
                        </h1>
                        <form className={styles.Login__form}>
                            <div className={styles.Login__formGroup}>
                                <input className={styles.Login__formInput} type="email" placeholder="Username or email"/>
                            </div>
                            <div className={styles.Login__formGroup}>
                                <input className={styles.Login__formInput} type="password" placeholder="Password"/>
                            </div>
                            <div className={styles.Login__formRow}>
                                <div className={`${styles.Login__formGroup} ${styles.Login__formRememberContainer}`}>
                                    <input className={styles.Login__formInput__checkbox} type="checkbox" id="remember-me"/>
                                    <label htmlFor="remember-me">Remember me</label>
                                </div>
                                <Link className={styles.Login__formForgotPassword} to="/register">Forgot Password?</Link>
                            </div>
                            <button type="submit" className={styles.Login__formBtn}>Sign In</button>
                            <p className={styles.Login__formRegisterText}>Don't have an account? <Link to="/register">Sign Up</Link></p>
                        </form>
                    </div>
                </section>
                <section className={styles.Login__sections__right}>
                    <div className={styles.Login__carouselContainer}>
                        <div className={styles.Login__carouselImageContainer}>
                            <img className={styles.Login__carouselImage} src={HandshakeImage}/>
                        </div>
                        <h1 className={styles.Login__carouselText}>Catalyst your business</h1>
                        <p className={styles.Login__carouselDescription}>
                            Metics help you connect to wide range of vendors 
                            and customers and help you stream line your buying or selling  
                            process by harnessing our unbeatable business managing tools
                        </p>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Login