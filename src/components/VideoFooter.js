import React from "react";
import "./VideoFooter.css";
import { Avatar } from "@mui/material";
import { Button } from "@mui/material";
import Ticker from "react-ticker";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import FavoriteIcon from '@mui/icons-material/Favorite';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
 import SendIcon from '@mui/icons-material/Send';

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
          <FavoriteIcon fontSize="large" />
          <ModeCommentIcon fontSize="large" />
          <SendIcon fontSize="large" />
          <MoreHorizIcon fontSize="large" />
        </div>
        <div className="videoFooter__actionsRight">
          <div className="videoFooter__stat">
            <FavoriteIcon />
            <p>{likes}</p>
          </div>
          <div className="videoFooter__stat">
            <ModeCommentIcon />
            <p>{shares}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VideoFooter;
