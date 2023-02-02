import React from "react";
import "./loginInput.css";
const LoginInput = ({ label }) => {
    return ( <
        div className = "login_input" >
        <
        label > { label } < /label> <
        input type = "text" / >
        <
        /div>
    );
};
export default LoginInput;