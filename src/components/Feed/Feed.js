import React, { useState, useEffect } from "react";
import "./Feed.css";
import TweetBox from "../TweetBox/TweetBox";
import Post from "../Post/Post";
import db from "../../firebase";
function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => doc.data()))
    );
  }, []);

  console.log(posts);
  return (
    <div className="feed">
      <div className="feed__header">
        <h2>Home</h2>
      </div>
      <TweetBox />

      {posts.map((post, index) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          image={post.image}
          avatar={post.avatar}
          key={index}
        />
      ))}
    </div>
  );
}

export default Feed;
