import { Avatar } from "@mui/material";
import React from "react";
import "./sideBar.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SquareIcon from "@mui/icons-material/Square";
import background_Image from "../../static/boxed-water.jpg";
import GroupsIcon from "@mui/icons-material/Groups";
import Groups from "@mui/icons-material/Groups";

const SideBar = () => {
    const recentItem = (topic, Icon) => {
        return ( <
            div className = "sidebar_recentItem" > { Icon && < Icon className = "sidebar_recentItem_icon" / > } <
            p > { topic } < /p> <
            /div>
        );
    };
    return ( <
        div className = "sidebar" >
        <
        div className = "sideBar_top" >
        <
        img src = { background_Image }
        alt = "" / >
        <
        Avatar className = "sideBar_avatar" / >
        <
        h2 > Amitav Panda < /h2> <
        p > Former SDE Intern @Alld Technology | React | DSA < /p> <
        /div> <
        div className = "sideBar_stats" >
        <
        div className = "sideBar_stat" >
        <
        p > Who 's viewed your profile</p> <
        p className = "sideBar_statNum" > 32 < /p> <
        /div> <
        div className = "sideBar_stat" >
        <
        p > Impressions of your posts < /p> <
        p className = "sideBar_statNum" > 60 < /p> <
        /div> <
        /div> <
        div className = "premium_features" >
        <
        SquareIcon className = "premium_icon" / >
        <
        p > See your Premium features < /p> <
        /div> <
        div className = "my_items" >
        <
        TurnedInIcon className = "my_items_icon" / >
        <
        p > My items < /p> <
        /div> <
        div className = "sidebar_bottom" >
        <
        p > Recent < /p> { recentItem("react", GroupsIcon) } { recentItem("react") } { recentItem("react") } { recentItem("react") } <
        /div> <
        /div>
    );
};

export default SideBar;