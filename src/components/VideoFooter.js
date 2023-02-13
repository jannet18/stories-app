import React from "react";
import "./VideoFooter.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import { Favorite, Comment, Send } from "@material-ui/icons";


function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <Avatar alt="/" src={avatarSrc} />

        <h3>
          {channel} . ({song})
          <Button variant="contained">
            <h4 style={{color: "white"}}>Follow</h4></Button>
        </h3>
      </div>
      <div className="footer-buttons">
        <div className="flex-box">
          <Favorite />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <Send />
          {shares}
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
