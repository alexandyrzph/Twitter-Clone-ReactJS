import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar}></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="header-text">
            <h3>
              {displayName}{" "}
              <span className="headerSpecial">
                {verified && <VerifiedIcon className="post-badge" /> } @{username}
              </span>
            </h3>
          </div>
          <div className="header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt="img" />
        <div className="post-footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
