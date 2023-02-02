import React from "react";
import "./login.css";
import LoginInput from "../LoginInput/loginInput";
const Login = () => {
    const login_register = () => {};
    const loginToApp = () => {};
    return ( <
        div className = "loginPage" >
        <
        div className = "loginPage_heading" >
        <
        p > Make the most of your professional Life < /p> <
        /div> <
        div className = "login_info" >
        <
        form >
        <
        LoginInput label = "Full name (if registering)" / >
        <
        LoginInput label = "Email Address" / >
        <
        LoginInput label = "Password" / >
        <
        LoginInput label = "Profile pic(optional)" / >
        <
        div className = "agreement" >
        <
        p className = "first_p" >
        By clicking Agree & Join, you agree to the LinkedIn { " " } <
        span className = "agreement_span" > User < /span> <
        /p> <
        p className = "second_p" >
        <
        span className = "agreement_span" > Agreement Privacy Policy < /span>{" "}
        and < span className = "agreement_span" > Cookie Policy < /span> <
        /p> <
        /div>

        <
        button className = "login_register"
        onClick = { login_register } >
        Agree & Join <
        /button> <
        /form> <
        div className = "loginPage_signIn" >
        <
        p >
        Already on LinkedIn ?
        <
        span className = "login_signin"
        onClick = { loginToApp } >
        Sign In <
        /span> <
        /p> <
        /div> <
        /div> <
        div className = "loginPage_business" >
        <
        p >
        Looking to create a page
        for a business ? < span > Get help < /span> <
        /p> <
        /div> <
        /div>
    );
};

export default Login;