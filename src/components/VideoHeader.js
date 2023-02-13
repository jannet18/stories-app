import React from 'react';
import './VideoHeader.css';
import { CameraAltIcon } from '@mui/icons-material';
import { ArrowBackIosIcon }from '@mui/icons-material';

const VideoHeader = () => {
  return (
    <div className='videoHeader'>
        <ArrowBackIosIcon/>
        <h3>Reels</h3>
        <CameraAltIcon/>

    </div>
  )
}

export default VideoHeader;