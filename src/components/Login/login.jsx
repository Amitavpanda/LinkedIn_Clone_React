import React, { useState } from "react";
import "./login.css";
import LoginInput from "../LoginInput/loginInput";
import { useDispatch } from "react-redux";
import { auth } from "../../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { login } from "../../features/user/userSlice";
const Login = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();

  const login_register = async (e) => {
    e.preventDefault();
    if (!name) {
      return alert("Please enter your name");
    }
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async ({ user }) => {
          await updateProfile(user, {
            displayName: name,
            photoURL: profilePic,
          }).then(async () => {
            await dispatch(
              login({
                email: user.email,
                uid: user.uid,
                displayName: name,
                photoURL: profilePic,
              })
            );
          });
        }
      );
    } catch (error) {
      alert(error);
    }
  };

  const loginToApp = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password).then(
        async ({ user }) => {
          await dispatch(
            login({
              email: user.email,
              uid: user.uid,
              displayName: user.displayName,
              profileUrl: user.photoURL,
            })
          );
        }
      );
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="loginPage">
      <div className="loginPage_heading">
        <p>Make the most of your professional Life</p>
      </div>
      <div className="login_info">
        <form>
          <LoginInput
            value={name}
            onChange={(e) => setName(e.target.value)}
            label="Full name (if registering)"
            type="text"
          />
          <LoginInput
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            label="Email Address"
            type="email"
          />
          <LoginInput
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            type="password"
          />
          <LoginInput
            value={profilePic}
            onChange={(e) => setProfilePic(e.target.value)}
            label="Profile pic(optional)"
            type="text"
          />
          <div className="agreement">
            <p className="first_p">
              By clicking Agree & Join,you agree to the LinkedIn{" "}
              <span className="agreement_span">User</span>
            </p>
            <p className="second_p">
              <span className="agreement_span">Agreement Privacy Policy</span>{" "}
              and <span className="agreement_span">Cookie Policy</span>
            </p>
          </div>

          <button className="login_register" onClick={login_register}>
            Agree & Join
          </button>
        </form>
        <div className="loginPage_signIn">
          <p>
            Already on LinkedIn?
            <span className="login_signin" onClick={loginToApp}>
              Sign In
            </span>
          </p>
        </div>
      </div>
      <div className="loginPage_business">
        <p>
          Looking to create a page for a business? <span>Get help</span>
        </p>
      </div>
    </div>
  );
};

export default Login;
