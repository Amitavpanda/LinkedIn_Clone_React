import React from "react";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/sideBar";
import Feed from "./components/Feed/feed";

function App() {
    return ( <
        div className = "app" > { /* Header  */ } <
        Header / >
        <
        div className = "app_body" >
        <
        SideBar / >
        <
        Feed / >
        <
        /div> { /* AppBar  */ } { /* SideBar  */ } { /* Feed  */ } { /* Widgets  */ } <
        /div>
    );
}

export default App;