// components/SoundButton.js
import { useState, useEffect } from 'react';
import useSound from 'use-sound';
import boopSfx from '/public/buttonClick.wav';
const SoundButton = () => {

    const [play]=useSound(boopSfx);

    return <button onClick={play} className='bg-white mt-8'><img src='/chuck_norris.png' width="220rem"></img></button>;

};

export default SoundButton;
