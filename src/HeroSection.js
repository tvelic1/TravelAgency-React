import React from 'react';
import './App.css';
import { Button } from './Button';
import './hero.css';

function HeroSection({flag,trenutniKorisnik}) {
  const handleReset = () => {
    // Očisti cijeli localStorage
   /* localStorage.clear();
    window.location.reload();*/  // Osvježava stranicu
  };
  return (
    <div className='hero-container'>
      <video src='/video-1.mp4' autoPlay loop muted />
          {flag && trenutniKorisnik.length > 0 && <h2 id="pozdrav">Dobrodošao, {trenutniKorisnik[0].unosImena}</h2>}

      <h2>ADVENTURE AWAITS</h2>
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
          
        >
          WATCH TRAILER <i className='far fa-play-circle' />
        </Button>
        <button id="butanjara" onClick={handleReset}>Resetuj localStorage</button>
      </div>
    </div>
  );
}

export default HeroSection;