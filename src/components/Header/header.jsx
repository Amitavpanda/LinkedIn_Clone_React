import React from "react";
import SearchIcon from "@mui/icons-material/Search";
import "./header.css";
import HeaderOptions from "../headerOptions/headerOptions";
import HomeIcon from "@mui/icons-material/Home";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import ChatIcon from "@mui/icons-material/Chat";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import avatar from "../../static/amitav.jpeg";
const Header = () => {
    return ( <
        div className = "header" >
        <
        div className = "header_left" >
        <
        img src = "https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg"
        alt = "" /
        >
        <
        div className = "header_search" >
        <
        SearchIcon / >
        <
        input type = "text" / >
        <
        /div>{" "} <
        /div>{" "} <
        div className = "header_right" >
        <
        HeaderOptions Icon = { HomeIcon }
        title = "Home" / >
        <
        HeaderOptions Icon = { SupervisorAccountIcon }
        title = "My Network" / > { " " } <
        HeaderOptions Icon = { BusinessCenterIcon }
        title = "Jobs" / > { " " } <
        HeaderOptions Icon = { ChatIcon }
        title = "Messaging" / > { " " } <
        HeaderOptions Icon = { NotificationsNoneIcon }
        title = "Notifications" / > { " " } <
        HeaderOptions avatar = { avatar }
        title = "Me" / > { " " } <
        /div>{" "} <
        /div>
    );
};

export default Header;