import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import { db } from "../../firebase";
import { useStateValue } from "../../contextApi/StateProvider";
import { Redirect } from "react-router-dom";

import FlipMove from "react-flip-move";
function Feed() {
  const [posts, setPosts] = useState([]);
  const [{ user }] = useStateValue();

  useEffect(() => {
    db.collection("posts")
      .orderBy("time", "desc")
      .onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);
  if (!user?.uid) return <Redirect to="/login" />;

  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      <FlipMove>
        {posts.map((post, index) => (
          <Post
            displayName={post.displayName}
            userName={post.userName}
            verified={post.verified}
            text={post.text}
            likes={post.likes}
            image={post.image}
            avatar={post.avatar}
            key={index}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
