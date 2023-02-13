import React from 'react';
import './VideoHeader.css';
import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import ArrowBackIosNewOutlinedIcon from '@mui/icons-material/ArrowBackIosNewOutlined';

const VideoHeader = () => {
  return (
    <div className='videoHeader'>
        <ArrowBackIosNewOutlinedIcon/>
        <h3>Shorts</h3>
        <CameraAltOutlinedIcon/>

    </div>
  )
}

export default VideoHeader;