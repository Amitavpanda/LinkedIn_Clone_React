import React from "react";
import Header from "../Header/header";
import "./headerOptions.css";
import Avatar from "@mui/material/Avatar";
const HeaderOptions = ({ Icon, title, avatar, onClick }) => {
        return ( <
            div onClick = { onClick }
            className = "headerOptions" > { " " } { Icon && < Icon className = "headerOptions_icon" / > } { " " } {
                avatar && < Avatar className = "headerOptions_icon"
                src = { avatar }
                />}{" "} <
                h3 className = "headerOptions_title" > { title } < /h3>{" "} <
                    /div>
            );
        };

        export default HeaderOptions;