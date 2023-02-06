import { Avatar } from "@mui/material";
import React from "react";
import "./post.css";
import InputOption from "../inputOptions/inputOptions";
import {
    ChatOutlined,
    SendOutlined,
    ShareOutlined,
    ThumbUpAltOutlined,
} from "@mui/icons-material";
const Post = ({ name, description, message, photoUrl }) => {
    return ( <
        div className = "post" >
        <
        div className = "post_header" >
        <
        Avatar src = { photoUrl } > { name[0] } < /Avatar> <
        div className = "post_info" >
        <
        h2 > { name } < /h2> <
        p > { description } < /p> <
        /div> <
        /div> <
        div className = "post_body" >
        <
        p > { message } < /p> <
        /div> <
        div className = "post_buttons" >
        <
        InputOption Icon = { ThumbUpAltOutlined }
        title = "Like"
        color = "rgba(0,0,0,0.6)" /
        >
        <
        InputOption Icon = { ChatOutlined }
        title = "Comment"
        color = "rgba(0,0,0,0.6)" /
        >
        <
        InputOption Icon = { ShareOutlined }
        title = "Repost"
        color = "rgba(0,0,0,0.6)" /
        >
        <
        InputOption Icon = { SendOutlined }
        title = "Send"
        color = "rgba(0,0,0,0.6)" / >
        <
        /div> <
        /div>
    );
};

export default Post;