import React, { useState } from "react";
import './Sign-in.style.scss'
import FormInputComponent from "../form-input/Form-input.component";
import CustomButton from "../custom-button/Custom-Button.component";
import {signInWithGoogle} from "../firebase/Firebase.utiles"
const SingIn = () => {
    const [SignIn, setSignIn] = useState({
        email: '',
        password: ''
    })

    const submitHandle = (e) => {
        e.preventDefault();
        setSignIn({ email: '', password: '' })
    }

    const handlechange = (e) => {
        const { value, name } = e.target;
        setSignIn({ [name]: value })
    }
    return <>
        <div className="sing-in">

            <h2 className="sing" >
                I already have an account
            </h2>
            <span>
                sign in with your email and password
            </span>
            <form onSubmit={submitHandle}>
                <FormInputComponent type="email" name="email" label='email' value={SignIn.email} required handlechange={handlechange} />
                <label>Email</label>
                <FormInputComponent type="password" name="password" label="password" value={SignIn.password} required handlechange={handlechange} />
                <label>Password</label>
                <br />
                <br />
                <signInWithGoogle type="submit">Sign In</signInWithGoogle>
                <signInWithGoogle type="submit">Sign In Google </signInWithGoogle>
            </form>
        </div>
    </>
}

export default SingIn;