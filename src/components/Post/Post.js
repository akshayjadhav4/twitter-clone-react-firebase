import React from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
function Post({ displayName, userName, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://avatars1.githubusercontent.com/u/34000732?s=460&u=640516ac2efab6dca8cd230a9b884c9ecba3a86b&v=4" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Akshay Jadhav
              <span className="post__headerSpecial">
                <VerifiedUserIcon className="post__badge" /> @akshayjadhav
              </span>
            </h3>
          </div>

          <div className="post__headerDescription">
            <p>
              Random Random Random Random Random Random Random Random Random
              Random
            </p>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/1097456/pexels-photo-1097456.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt=""
        />
        <div className="post__footer">
          <ChatBubbleOutlineOutlinedIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
