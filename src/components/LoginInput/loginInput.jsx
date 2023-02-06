import React from "react";
import "./loginInput.css";
const LoginInput = ({ label, value, onChange, type }) => {
    return ( <
        div className = "login_input" >
        <
        label > { label } < /label>{" "} <
        input value = { value }
        onChange = { onChange }
        type = { type }
        />{" "} <
        /div>
    );
};
export default LoginInput;