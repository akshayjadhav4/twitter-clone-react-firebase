import React from "react";
import "./Widgets.css";
import {
  TwitterTweetEmbed,
  TwitterTimelineEmbed,
  TwitterShareButton,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input type="text" placeholder="Search Twitter" />
      </div>
      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId={"1292180215360368648"} />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AKSHAY_257"
          options={{ height: 400 }}
        />
        <TwitterShareButton
          url={"https://twitter.com/AKSHAY_257"}
          options={{ text: "#reactjs is awesome", via: "akshay" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
