import React from "react";
import "./TweetBox.css";
import { Button, Avatar } from "@material-ui/core";
function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="https://avatars1.githubusercontent.com/u/34000732?s=460&u=640516ac2efab6dca8cd230a9b884c9ecba3a86b&v=4" />
          <input type="text" placeholder="What's happening?" />
        </div>
        <input
          className="tweetBox__inputImage"
          type="text"
          placeholder="Enter Image URL"
        />
        <Button className="tweetBox__tweetButton">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
