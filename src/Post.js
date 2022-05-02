import { Avatar } from "@mui/material";
import React from "react";
import "./Post.css";
import VerifiedIcon from "@mui/icons-material/Verified";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://i.ytimg.com/vi/JsO5nlH7TYs/maxresdefault.jpg"></Avatar>
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="header-text">
            <h3>
              Fullmetal alchemist{" "}
              <span>
                <VerifiedIcon className="post-badge" />
              </span>
            </h3>
          </div>
          <div className="header-description">
            <p>The First Twitter Clone</p>
          </div>
        </div>
        <img
          src="https://miro.medium.com/max/450/1*R99r7Lxv9VGtCuWk00O_5A.jpeg"
          alt="img"
        />
      </div>
      <div className="post-footer">
        <ChatBubbleOutlineIcon fontSize="small" />
        <RepeatIcon fontSize="small" />
        <FavoriteBorderIcon fontSize="small"/>
        <PublishIcon fontSize="small" />
      </div>
    </div>
  );
}

export default Post;
