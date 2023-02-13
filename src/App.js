import React from 'react';
import './App.css';
import VideoCard from './components/VideoCard';

function App() {
  return (
    <div className="app">
    <div className="app__top">
    {/* <img src="logo1.png" alt="App Logo" className='app__logo'/> */}
      <h1>Shorts</h1>
    </div>
    <div className="app__videos">
      <VideoCard
      url="https://www.pinterest.com/pin/53480314314900536/"
      channel="Easy Recipes"
      avatarSrc="https://i.pinimg.com/236x/77/84/d2/7784d21a551f9912b5f9b70b3a344aca.jpg"
      song="Anything Goes"
      likes={250}
      shares={150}
      />
      <VideoCard
       url="https://www.pinterest.com/pin/16325617391516356/"
       channel="Healthy Dressings"
       avatarSrc="https://i.pinimg.com/236x/7a/fd/e3/7afde3bc81e29f7b6aeb47812488cabc.jpg"
       song="Anything Goes"
       likes={250}
       shares={150}
      />
      
    </div>
    </div>
  );
}

export default App;
