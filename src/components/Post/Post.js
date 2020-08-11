import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
import DeleteIcon from "@material-ui/icons/Delete";
import { db } from "../../firebase";
import { useStateValue } from "../../contextApi/StateProvider";

const Post = forwardRef(
  (
    {
      userId,
      displayName,
      userName,
      verified,
      text,
      postId,
      likes,
      image,
      avatar,
    },
    ref
  ) => {
    const [{ user }] = useStateValue();

    const likeTweet = () => {
      db.collection("posts")
        .doc(postId)
        .update({
          likes: likes + 1,
        });
    };

    const deleteTweet = () => {
      db.collection("posts").doc(postId).delete();
    };
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {userName}
                </span>
              </h3>
            </div>

            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineOutlinedIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <span>
              <FavoriteBorderIcon
                fontSize="small"
                onClick={likeTweet}
                style={{ color: likes > 0 ? "red" : "black" }}
              />{" "}
              {likes}
            </span>
            <PublishIcon fontSize="small" />
            {userId === user.uid ? <DeleteIcon onClick={deleteTweet} /> : null}
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
