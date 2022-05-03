import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@mui/icons-material/Search";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <SearchIcon className="widgeds-searchIcon"></SearchIcon>
        <input type="text" placeholder="Search Twitter" />
      </div>

      <div className="widgets-container">
        <h2>What's happening?</h2>

        <TwitterTweetEmbed tweetId="1521202951230046210" />
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="Elonmusk"
          options={{ height: 300 }}
        />
        <TwitterShareButton
          options={{ text: "React is awesome", via: "elon musk" }}
        />
      </div>
    </div>
  );
}

export default Widgets;
