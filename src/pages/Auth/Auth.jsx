// import React from 'react'
import classes from "./Auth.module.css"
import { Link } from "react-router-dom"
import { useState } from "react"
import { auth } from '../../Utility/firebase'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'

const Auth = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    // console.log(email, password);

    const handleLogin = (e) => {
        e.preventDefault()
        if (e.target.name === 'signin') {
            signInWithEmailAndPassword(auth, email, password)
                .then((userInfo) => {
                    console.log(userInfo);

                    // Signed in
                    // const user = userInfo.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                });
        }
        else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userInfo) => {
                    console.log(userInfo);

                    // Signed in 
                    // const user = userInfo.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    // ..
                });
        }
    }


    return (
        <>
            <div className={classes.login}>
                <Link to="/">
                    <img src="https://i.pinimg.com/736x/fe/54/b9/fe54b93c934495741f58a20cfe6daf6d.jpg   " alt="" />
                </Link>
                <div className={classes.login__Container}>
                    <h1>Sign In</h1>
                    <form action="">
                        <div>
                            <label htmlFor="email">Email</label>
                            <input type="email" id="email" name="" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label>
                            <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button name="signin" className={classes.login_btn} onClick={handleLogin}>Sign In</button>
                    </form>

                    {/* agrement and new to amazon  */}
                    <p>by signing-in you agree to the Amazon Clone Conditions of Use & Sale.
                        Please see our Privacy Notice, our Cookies Notice and our Interest-Based
                        Ads Notice.
                    </p>
                    <button name="signup" onClick={handleLogin} className={classes.login__register_btn}>Create your Amazon Account</button>
                </div>
            </div>
        </>
    )
}

export default Auth