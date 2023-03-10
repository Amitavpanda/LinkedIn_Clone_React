import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import avatar from "../../static/amitav.jpeg";
import InputOption from "../inputOptions/inputOptions";
import ImageIcon from "@mui/icons-material/Image";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import YouTubeIcon from "@mui/icons-material/YouTube";
import "./feed.css";
import Post from "../Post/post";
import { db } from "../../firebase";
import {
  QuerySnapshot,
  Timestamp,
  collection,
  getDocs,
  onSnapshot,
  query,
  addDoc,
  orderBy,
} from "firebase/firestore";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";

const Feed = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);
  const user = useSelector(selectUser);
  useEffect(() => {
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    onSnapshot(q, (QuerySnapshot) => {
      setPosts(
        QuerySnapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);
  const sendPost = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "posts"), {
        name: user.displayName,
        description: user.email,
        message: input,
        photoUrl: user.photoUrl || "",
        timestamp: Timestamp.now(),
      });
      setInput("");
    } catch (err) {
      alert(err);
    }
  };
  return (
    <div className="feed">
      <div className="feed_inputContainer">
        <div className="feed_upper">
          <Avatar className="feed_inputContainer_avatar" src={user.photoUrl}>
            {user.email[0]}
          </Avatar>
          <div className="feed_input">
            <form>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                type="text"
                placeholder="Start a post"
              />
              <button onClick={sendPost} type="submit">
                {" "}
                Send{" "}
              </button>{" "}
            </form>{" "}
          </div>{" "}
        </div>{" "}
        <div className="feed_inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={YouTubeIcon} title="Video" color="#7FC15E" />
          <InputOption Icon={CalendarTodayIcon} title="Event" color="#E7A33E" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write Article"
            color="#e16745"
          />
        </div>{" "}
      </div>{" "}
      {posts.map((post) => (
        <Post
          key={post.id}
          name={post.data.name}
          description={post.data.description}
          message={post.data.message}
          photoUrl={post.data.photoUrl}
        />
      ))}
    </div>
  );
};

export default Feed;
