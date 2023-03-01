import React from "react"
import { Link } from "react-router-dom"
import LogoImage from '../../assets/images/logo.png'
import HandshakeImage from '../../assets/images/handshake.png'

import styles from './Register.module.scss'
import Header from "../../components/Header/Header"

const Register = () => {
    return (
        <div className={styles.Register}>
            <Header/>
            <div className={styles.Register__sections}>
                <section className={styles.Register__sections__left}>
                    <div className={styles.Register__contentContainer}>
                        <h1 className={styles.Register__title}>
                            <span className={styles.Register__title__main}>Sign up for an account</span>
                            <span className={styles.Register__title__sub}>Create new possiblities with us</span>
                        </h1>
                        <form className={styles.Register__form}>
                            <div className={styles.Register__formContainer}>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="first_name" type="text" placeholder="First Name"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="middle_name" type="text" placeholder="Middle Name"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="last_name" type="text" placeholder="Last Name"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="email" type="email" placeholder="Email"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="password" type="password" placeholder="Password"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="password2" type="password" placeholder="Confirm Password"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="phone" type="text" placeholder="Phone"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="designation" type="text" placeholder="Designation"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="" type="address" placeholder="Address"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="" type="city" placeholder="City"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="" type="country" placeholder="Country"/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <input className={styles.Register__formInput} name="" type="zipcode" placeholder="Zipcode"/>
                                </div>
                            </div>
                            <button type="submit" className={styles.Register__formBtn}>Proceed</button>
                        </form>
                    </div>
                </section>
                <section className={styles.Register__sections__right}>
                    <div className={styles.Register__welcomeContainer}>
                        <h1 className={styles.Register__welcomeText}>
                            <span className={styles.Register__welcomeText__main}>Welcome to Metics</span>
                            <span className={styles.Register__welcomeText__sub}>Redefining business comfort</span>
                        </h1>
                        <ul className={styles.Register__welcomeList}>
                            <li className={styles.Register__welcomeListItem}>Make your digital presence standout with our unshakable partner network</li>
                            <li className={styles.Register__welcomeListItem}>Grow exponentially with Metics Hub stretching to new horizons and global network</li>
                            <li className={styles.Register__welcomeListItem}>Always partner first approach serves you with un-beatable growth and customer support</li>
                        </ul>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Register