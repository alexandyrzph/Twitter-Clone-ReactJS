import { Avatar, Button } from "@mui/material";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://i.ytimg.com/vi/JsO5nlH7TYs/maxresdefault.jpg"></Avatar>
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input
          className="tweetBox-imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button className="tweetBox-btn">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
