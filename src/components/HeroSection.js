import '../css/App.css';
import { Button } from './Button';
import '../css/HeroSection.css';
import React, { useEffect,useState } from 'react';


function HeroSection({ flag, trenutniKorisnik }) {
  const [showTitle, setShowTitle] = useState(true); // Stanje koje prati da li naslov treba da bude prikazan

  const handleReset = () => {
    // Očisti cijeli localStorage
    /* localStorage.clear();
     window.location.reload();*/  // Osvježava stranicu
  };
  useEffect(() => {

    const handleScroll = () => {
      setShowTitle(window.scrollY ===0); // Ako je trenutni scroll manji od prethodnog, prikaži naslov
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);

    };
  }, []);
  return (
    <div className='hero-container'>
      <video src='/video-1.mp4' autoPlay loop muted />
      {flag   && <h2 id="pozdrav" className={`pozdrav ${showTitle ? '' : 'hide'}`}>Dobrodošao, {trenutniKorisnik.ime}</h2>}

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