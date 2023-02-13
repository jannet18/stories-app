import React, { useState, useEffect} from 'react';
import './App.css';
import VideoCard from './components/VideoCard';
import { db }from './firebase';

function App() {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    db.collection('videos').onSnapshot(snapshot => {
      setVideos(snapshot.docs.map(doc => doc.data()))
    })
  }, [videos])
  return (
    <div className="app">
    <div className="app__top">
    {/* <img src="logo1.png" alt="App Logo" className='app__logo'/> */}
      <h1>Shorts</h1>
    </div>
    <div className="app__videos">
      {videos.map(({url, channel, avatarSrc, song, likes, shares}) => (
        <VideoCard
        url={url}
        channel={channel}
        avatarSrc={avatarSrc}
        song={song}
        likes={likes}
        shares={shares}
        />

      ))}
      
      
    </div>
    </div>
  );
}

export default App;
