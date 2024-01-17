// components/SoundButton.js
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import boopSfx from '/public/buttonClick.wav';
const SoundButton = () => {

    const [play]=useSound(boopSfx);

    return <button onClick={play} className='bg-white'>Boop!</button>;
    // return <img></img>











  // const [audio, setAudio] = useState(null);

  // useEffect(() => {
  //   setAudio(new Audio('/buttonClick.wav'));
  // }, []);

  // const playSound = () => {
  //   if (audio) {
  //       console.log('playing');
  //     audio.play();
  //   }
  // };

  // return (
  //   <div>
  //     <button onClick={playSound}>Click me to play sound</button>
  //   </div>
  // );
};

export default SoundButton;
