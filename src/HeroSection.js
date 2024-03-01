import React from 'react';
import './App.css';
import { Button } from './Button';
import './hero.css';

function HeroSection() {
  const handleReset = () => {
    // Očisti cijeli localStorage
    localStorage.clear();

    // Ili ukloni specifični ključ iz localStorage
    // localStorage.removeItem('imeKljuca');

    // Dodatne akcije nakon resetovanja (opcionalno)
    // npr. osvježavanje stranice ili ažuriranje stanja aplikacije
    window.location.reload(); // Osvježava stranicu
  };
  return (
    <div className='hero-container'>
      <video src='/video-1.mp4' autoPlay loop muted />
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className='hero-btns'>
        <Button
          
          buttonStyle='btn--outline'
          buttonSize='btn--medium'
          whereTo='sign-up'
        >
          GET STARTED
        </Button>
        <Button
          
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          whereTo='sign-up'
          onClick={console.log('hey')}
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        <button id="butanjara" onClick={handleReset}>Resetuj localStorage</button>
      </div>
    </div>
  );
}

export default HeroSection;