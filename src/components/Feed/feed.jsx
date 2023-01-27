import { Avatar } from "@mui/material";
import React from "react";
import avatar from "../../static/amitav.jpeg";
import InputOption from "../inputOptions/inputOptions";
import ImageIcon from "@mui/icons-material/Image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./feed.css";
import Post from "../Post/post";
const Feed = () => {
    return ( <
        div className = "feed" >
        <
        div className = "feed_inputContainer" >
        <
        div className = "feed_upper" >
        <
        Avatar className = "feed_inputContainer_avatar"
        src = { avatar }
        />{" "} <
        div className = "feed_input" >
        <
        form >
        <
        input type = "text"
        placeholder = "Start a post" / >
        <
        button type = "submit" > Send < /button>{" "} <
        /form>{" "} <
        /div>{" "} <
        /div>{" "} <
        div className = "feed_inputOptions" >
        <
        InputOption Icon = { ImageIcon }
        title = "Photo"
        color = "#70B5F9" / >
        <
        InputOption Icon = { YouTubeIcon }
        title = "Video"
        color = "#7FC15E" / >
        <
        InputOption Icon = { CalendarTodayIcon }
        title = "Event"
        color = "#E7A33E" / >
        <
        InputOption Icon = { CalendarViewDayIcon }
        title = "Write Article"
        color = "#7FC15E" /
        >
        <
        /div>{" "} <
        /div> <
        Post name = "Amitav Panda"
        description = "This is description"
        message = "this is message this is message this is message this is message this is messagethis is message this is message this is messagethis is message this is messagethis is this is message is messagethis is messagethis is message is messagethis is messagethis is message" /
        >
        <
        /div>
    );
};

export default Feed;