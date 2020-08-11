import React, { useState } from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
import { db } from "../../firebase";
import { useStateValue } from "../../contextApi/StateProvider";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [{ userProfile, user }] = useStateValue();

  const sendTweet = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      userId: user.uid,
      displayName: userProfile.displayName,
      userName: userProfile.userName,
      verified: userProfile.userName == "akshayjadhav" ? true : false,
      text: tweetMessage,
      image: tweetImage,
      avatar: "",
      time: new Date(),
      likes: 0,
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
