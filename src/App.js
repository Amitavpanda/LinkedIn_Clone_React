import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import Header from "./components/Header/header";
import SideBar from "./components/SideBar/sideBar";
import Feed from "./components/Feed/feed";
import { login, logout, selectUser } from "./features/user/userSlice";
import Login from "./components/Login/login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import Widgets from "./components/Widgets/widgets";

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            email: user.email,
            uid: user.uid,
            displayName: user.displayName,
            photoUrl: user.photoURL,
          })
        );
      } else {
        dispatch(logout());
      }
    });
  }, []);

  return (
    <div className="app">
      <Header />{" "}
      {!user ? (
        <Login />
      ) : (
        <div className="app_body">
          <SideBar />
          <Feed />
          <Widgets />
        </div>
      )}{" "}
    </div>
  );
}

export default App;
