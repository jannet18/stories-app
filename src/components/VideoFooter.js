import React from "react";
import "./VideoFooter.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import Ticker from "react-ticker";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import { Favorite, ModeComment, MoreHoriz, Send } from "@material-ui/icons";

function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <Avatar alt="/" src={avatarSrc} />

        <h3>
          {channel} . <Button variant="contained">Follow</Button>
        </h3>
      </div>
      <div className="videoFooter__ticker">
        <MusicNoteIcon className="videoFooter__icon" />
        <Ticker mode="smooth">
          {({ index }) => (
            <>
              <h1>{song}</h1>
            </>
          )}
        </Ticker>
      </div>
      <div className="videoFooter__actions">
        <div className="videoFooter__actionsLeft">
          <Favorite fontSize="large" />
          <ModeComment fontSize="large" />
          <Send fontSize="large" />
          <MoreHoriz fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <Favorite />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeComment />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
