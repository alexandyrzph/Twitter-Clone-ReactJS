import { Avatar, Button } from "@mui/material";
import React, { useState } from "react";
import "./TweetBox.css";
import db from "./firebase";

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      displayName: "Alexander",
      username: "Alexandyrz",
      verified: true,
      text: tweetMessage,
      avatar: "https://i.ytimg.com/vi/JsO5nlH7TYs/maxresdefault.jpg",
      image: tweetImage,
    });
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox-input">
          <Avatar src="https://i.ytimg.com/vi/JsO5nlH7TYs/maxresdefault.jpg"></Avatar>
          <input
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage}
            placeholder="What's happening?"
            type="text"
          ></input>
        </div>
        <input
          value={tweetImage}
          onChange={(e) => setTweetImage(e.target.value)}
          className="tweetBox-imageInput"
          placeholder="Optional: Enter image URL"
          type="text"
        ></input>
        <Button onClick={sendTweet} className="tweetBox-btn">
          Tweet
        </Button>
      </form>
    </div>
  );
}

export default TweetBox;
