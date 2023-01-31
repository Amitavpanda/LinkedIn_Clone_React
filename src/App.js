import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/sideBar";
import Feed from "./components/Feed/feed";
import { selectUser } from "./features/user/userSlice";
import Login from "./components/Login/login";

function App() {
    const user = useSelector(selectUser);
    return ( <
        div className = "app" >
        <
        Header / > {!user ? ( <
                Login / >
            ) : ( <
                div className = "app_body" >
                <
                SideBar / >
                <
                Feed / >
                <
                /div>
            )
        } <
        /div>
    );
}

export default App;