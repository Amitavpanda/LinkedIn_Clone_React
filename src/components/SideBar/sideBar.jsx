import { Avatar } from "@mui/material";
import React from "react";
import "./sideBar.css";
import TurnedInIcon from "@mui/icons-material/TurnedIn";
import SquareIcon from "@mui/icons-material/Square";
import background_Image from "../../static/boxed-water.jpg";
import GroupsIcon from "@mui/icons-material/Groups";
import Groups from "@mui/icons-material/Groups";
import { selectUser } from "../../features/user/userSlice";
import { useSelector } from "react-redux";
import EventIcon from "@mui/icons-material/Event";

const SideBar = () => {
  const user = useSelector(selectUser);
  const recentItem = (topic, Icon) => {
    return (
      <div className="sidebar_recentItem">
        {Icon && <Icon className="sidebar_recentItem_icon" />}
        <p> {topic} </p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sideBar_top">
        <img src={background_Image} alt="" />
        <Avatar src={user.photoUrl} className="sideBar_avatar">
          {user.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2> <p>{user.email}</p>{" "}
      </div>{" "}
      <div className="sideBar_stats">
        <div className="sideBar_stat">
          <p> Who 's viewed your profile</p>{" "}
          <p className="sideBar_statNum"> 32 </p>{" "}
        </div>{" "}
        <div className="sideBar_stat">
          <p> Impressions of your posts </p>{" "}
          <p className="sideBar_statNum"> 60 </p>{" "}
        </div>{" "}
      </div>{" "}
      <div className="premium_features">
        <SquareIcon className="premium_icon" />
        <p> See your Premium features </p>{" "}
      </div>{" "}
      <div className="my_items">
        <TurnedInIcon className="my_items_icon" />
        <p> My items </p>{" "}
      </div>{" "}
      <div className="sidebar_bottom">
        <div className="sidebar_bottom_recent">
          <p> Recent </p>
          {recentItem("Brain Expansion Group", GroupsIcon)}
          {recentItem("Cyber Security Training", EventIcon)}
          {recentItem("Google Data CLound Summit", EventIcon)}
        </div>
        <div className="sidebar_bottom_groups">
          <p> Groups</p>
          {recentItem("Brain Expansion Group", GroupsIcon)}
        </div>
        <div className="sidebar_bottom_events">
          <p>Events</p>
        </div>
        <div className="sidebar_bottom_hashtags">
          <p>Followed Hashtags</p>
        </div>
        <div className="sidebar_bottom_discover">
          <p>Discover More</p>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
