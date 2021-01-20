
import React, { useState } from "react"

// import App from '../App';

const Form = (props) => {
    const{ inputs,setInputs } = props;

    const[ firstName, setFirstName ] = useState("");
    const[ lastName, setLastName ] = useState("");
    const[ email, setEmail ] = useState("");
    const[ password, setPassword ] = useState("");
    const[ confirmPassword, setConfirmPassword ] = useState("");

    const[ firstNameError,setFirstNameError ] = useState("");
    const[ lastNameError,setLastNameError ] = useState("");
    const[ emailError, setEmailError ] = useState("");
    const[ passwordError, setPasswordError ] = useState("");
    const[ confirmPasswordError, setConfirmPasswordError ] = useState("");

    const onChange = (e) => {
        setInputs({
            ...inputs,
            [e.target.name]: e.target.value
                            // "target value inside input"
        })
    };
        
    const validateFirstName = (e) => {
        // console.log(e);
        setFirstName(e.target.value);
        if(e.target.value.length < 3){
            setFirstNameError("name must be longer than 2 characters");
        }
        else if(e.target.value.length > 2){
            setFirstNameError("")
        }
    };

    const validateLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 3){
            setLastNameError("name must be longer than 2 characters");
        }
        else if(e.target.value.length > 2){
            setLastNameError("")
        }
    };
    const validateEmail = (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 6){
            setEmailError("name must be longer than 5 characters");
        }
        else if(e.target.value.length > 5){
            setEmailError("")
        }
    };
    const validatePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 8){
            setPasswordError("name must be longer than 8 characters");
        }
        else if(e.target.value.length > 7){
            setPasswordError("")
        }
    };
    const validateConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        if(e.target.value != password){
            setConfirmPasswordError("password does not match");
        }
        else if(e.target.value == password){
            setConfirmPasswordError("password match!")
        }
    };

    return(
        <form onSubmit = { (e) => e.preventDefault() }>
            <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input onChange = {validateFirstName} type="text" name="firstName" />
                {firstNameError ? <p style={{color:'red'}}> {firstNameError} </p> : ''}
            </div>    

            <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input onChange = {validateLastName} type="text" name="lastName"/>
                {lastNameError ? <p style={{color:'red'}}> {lastNameError} </p> : ''}
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input onChange = { validateEmail} type="text" name="email"/>
                {emailError ? <p style={{color:'red'}}> {firstNameError} </p> : ''}
            </div>

            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input onChange = {validatePassword} type="text" name="password"/>
                {passwordError ? <p style={{color:'red'}}> {passwordError} </p> : ''}
            </div>

            <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input onChange = {validateConfirmPassword} type="password" name="confirmPassword"/>
                {confirmPasswordError ? <p style={{color:'red'}}> {confirmPasswordError} </p> : ''}
            </div>
        </form>
    );
};

export default Form;