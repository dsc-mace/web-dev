import React, { useContext, useState } from "react"
import { Link } from "react-router-dom"
import LogoImage from '../../assets/images/logo.png'
import HandshakeImage from '../../assets/images/handshake.png'

import styles from './Register.module.scss'
import Header from "../../components/Header/Header"
import { toast } from "react-toastify"

import AuthContext from '../../context/AuthContext'
import InputWithError from "../../components/InputWithError/InputWithError"
import { Oval } from "react-loader-spinner"

const Register = () => {
    const [form, setForm] = useState({})
    const [formErrors, setFormErrors] = useState({})
    const [spinnerActive, setSpinnerActive] = useState(false)

    const {user, login, logout} = useContext(AuthContext)

    const handleInputChange = (e) => {
        setForm((prev) => {
            return (
                {
                    ...prev,
                    [e.target.name]: e.target.value
                }
            )
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(spinnerActive) return
        setSpinnerActive(true)
        
        console.log(form)

        const asyncFunc = async () => {
            const res = await fetch("http://metics.us:8000/register/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })
            if(!res.ok) {
                console.log('toastify')
                if(res.status === 400) {
                    const data = await res.json()
                    console.log(res.status)
                    setFormErrors(data)
                    console.log(data)
                }
                else {
                    toast("Some error occured!", {
                        type: 'error',
                    })
                }
                setSpinnerActive(false)
                return
            }
            const data = await res.json()
            await login(data)
            await setSpinnerActive(false)
            console.log(data)
        }
        asyncFunc()
    }

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
                        <form className={styles.Register__form} onSubmit={handleSubmit}>
                            <div className={styles.Register__formContainer}>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="username" type="text" placeholder="Username" errorMsg={formErrors["username"] && formErrors["username"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="email" type="email" placeholder="Email" errorMsg={formErrors["email"] && formErrors["email"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="first_name" type="text" placeholder="First Name" errorMsg={formErrors["first_name"] && formErrors["first_name"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="last_name" type="text" placeholder="Last Name" errorMsg={formErrors["last_name"] && formErrors["last_name"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="password" type="password" placeholder="Password" errorMsg={formErrors["password"] && formErrors["password"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="password2" type="password" placeholder="Confirm Password" errorMsg={formErrors["password2"] && formErrors["password2"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="phone" type="text" placeholder="Phone" errorMsg={formErrors["phone"] && formErrors["phone"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="designation" type="text" placeholder="Designation" errorMsg={formErrors["designation"] && formErrors["designation"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="address" type="address" placeholder="Address" errorMsg={formErrors["address"] && formErrors["address"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="city" type="city" placeholder="City" errorMsg={formErrors["city"] && formErrors["city"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="country" type="country" placeholder="Country" errorMsg={formErrors["country"] && formErrors["country"][0]}/>
                                </div>
                                <div className={styles.Register__formGroup}>
                                    <InputWithError onChange={handleInputChange} name="zipcode" type="zipcode" placeholder="Zipcode" errorMsg={formErrors["zipcode"] && formErrors["zipcode"][0]}/>
                                </div>
                            </div>
                            <div className={styles.Register__formBottom}>
                                <button type="submit" className={styles.Register__formBtn}>
                                    <span>Proceed</span>&nbsp;
                                    <Oval
                                        height={20}
                                        width={20}
                                        color="#ffffff"
                                        wrapperStyle={{}}
                                        wrapperClass=""
                                        visible={spinnerActive}
                                        ariaLabel='oval-loading'
                                        secondaryColor="#bbbbbb"
                                        strokeWidth={6}
                                        strokeWidthSecondary={6}
                                        />
                                </button>
                                <p>By creating an account, you are agreeing to our <strong>Privacy Policy</strong>, and <strong>Electronics Communication Policy</strong></p>
                            </div>
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