import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import { db } from "../../firebase";
function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Akshay Jadhav",
      userName: "akshayjadhav",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      avatar:
        "https://avatars1.githubusercontent.com/u/34000732?s=460&u=640516ac2efab6dca8cd230a9b884c9ecba3a86b&v=4",
    });
    setTweetImage("");
    setTweetMessage("");
  };
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            type="text"
            placeholder="What's happening?"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Enter Image URL"
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
        />
        <Button
          className="tweetBox__tweetButton"
          type="submit"
          onClick={sendTweet}
        >
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
